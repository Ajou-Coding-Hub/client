import request from "@/apis";
import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";
import HeartIcon from "@/components/atoms/HeartIcon";
import Padding from "@/components/atoms/Padding";
import Input from "@/components/molecules/Input";
import { useAuth } from "@/store";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid/non-secure";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { useVirtualizer } from "@tanstack/react-virtual";
import { classNames } from "@/utils/class";
TimeAgo.addDefaultLocale(ko);
const timeAgo = new TimeAgo("ko-KR");

interface IFeedback {
  id: string;
  owner: {
    picture: string;
    name: string;
  };
  content: string;
  createdAt: string;
  likeCount: number;
  onLike?: React.MouseEventHandler<HTMLDivElement>;
  isLike?: boolean;
}

const Feedback: React.FC<IFeedback> = ({
  content,
  likeCount,
  owner,
  onLike,
  createdAt,
  isLike,
}) => {
  const ago = useMemo(() => timeAgo.format(new Date(createdAt)), [createdAt]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
      <Box className="w-full h-full">
        <div className="flex gap-5 items-center mb-5">
          <img className="w-10 h-10 rounded-full" src={owner.picture} />

          <div className="flex flex-col gap-1">
            <div className="text-sm">
              <p className="text-gray-600">
                <b className="text-black">{owner.name}</b>님이 피드백을
                작성했어요.
              </p>
            </div>
            <div className="text-xs text-gray-700">아주대학교 학생</div>
          </div>
        </div>

        <div className="my-5 whitespace-pre-line">
          <p className="break-words">{content}</p>
        </div>

        <p className="text-xs text-gray-600 mb-1">{ago}</p>

        <div
          onClick={onLike}
          className="flex gap-1 items-center select-none cursor-pointer w-fit"
        >
          <HeartIcon className="w-6 h-6" filled={isLike} />
          <p className="text-sm">{likeCount}</p>
        </div>
      </Box>
    </div>
  );
};

// 무한 스크롤
const FeedbackWriter = ({
  onWrite,
}: {
  onWrite: (content: string) => void;
}) => {
  const {
    profile: { name, picture },
  } = useAuth();
  const [content, setContent] = useState("");
  const handleWrite = useCallback(() => {
    if (!content) {
      toast.warn("피드백이 비어있어요 !");
    }
    onWrite(content);
  }, [onWrite, content]);

  return (
    <Padding>
      <div className="w-full mt-3">
        <div className="flex gap-3 items-center mb-3">
          <img className="w-6 h-6 rounded-full" src={picture} />

          <div className="flex flex-col gap-1">
            <p className="text-gray-600 text-sm">
              <b className="text-black">{name}</b>님의 피드백
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Input value={content} onChange={(e) => setContent(e.target.value)} />
          <Button onClick={handleWrite} className="w-24 justify-center">
            작성
          </Button>
        </div>
      </div>
    </Padding>
  );
};

export function FeedbackPage() {
  const { mutateAsync: mutateFeedbackWrite } = useMutation({
    mutationFn: (data: Record<"content", string>) =>
      request.post("/feedback", data),
    onError() {
      toast.error("피드백 작성에 실패하였습니다.");
    },
    onSuccess() {
      toast.success("피드백 작성 성공");
    },
  });

  const { mutateAsync: mutateLike } = useMutation({
    mutationFn: (feedbackId: string) =>
      request.post(`/feedback/like/${feedbackId}`),
    onError() {},
    onSuccess() {
      refetch();
    },
  });

  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    refetch,
    ...result
  } = useInfiniteQuery(["feedback"], {
    queryFn: async ({ pageParam = undefined }) => {
      return (
        await request.get("/feedback", {
          params: {
            cursor: pageParam,
          },
        })
      ).data;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.length < 10
        ? undefined
        : Math.min(...lastPage.map((v: any) => v.id));
    },
  });

  const { isLoggedin, getUserId } = useAuth();

  const isLike = useCallback(
    (feedbackLikes: Record<"likerId", number>[]) => {
      return feedbackLikes?.find((f) => f.likerId === getUserId());
    },
    [getUserId]
  );

  const parentRef = React.useRef(null);

  const allRows = useMemo(() => data?.pages?.flat() ?? [], [data]);

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (index) => {
      return 190;
    },
    enableSmoothScroll: false,
    overscan: 10,
  });

  React.useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();
    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);

  return (
    <div
      className="h-[calc(100vh_-_64px)] w-full overflow-auto"
      ref={parentRef}
    >
      {isLoggedin ? (
        <FeedbackWriter
          onWrite={(content) =>
            mutateFeedbackWrite({ content }).then(() => refetch())
          }
        />
      ) : null}
      <div
        className="w-full relative"
        style={{
          height: rowVirtualizer.getTotalSize(),
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtual) => {
          const data = allRows[virtual.index];
          if (!data) {
            return null;
          }
          return (
            <div
              key={virtual.key}
              data-index={virtual.index}
              ref={rowVirtualizer.measureElement}
              className={"absolute w-full top-8"}
              style={{
                transform: `translateY(${virtual.start}px)`,
              }}
            >
              <Feedback
                onLike={() => {
                  if (!isLoggedin) {
                    toast.warn("로그인 후 사용 가능합니다.");
                    return;
                  }
                  mutateLike(data.id);
                }}
                {...data}
                isLike={isLike(data?.feedbackLikes)}
                likeCount={data?._count?.feedbackLikes}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
