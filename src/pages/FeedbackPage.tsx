import request from "@/apis";
import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";
import HeartIcon from "@/components/atoms/HeartIcon";
import Padding from "@/components/atoms/Padding";
import Input from "@/components/molecules/Input";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid/non-secure";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

interface FeedbackProps {
  id: string;
  user: {
    profileImg: string;
    name: string;
  };
  content: string;
  createdTime: Date;
  likeCount: number;
  onLike?: React.MouseEventHandler<HTMLDivElement>;
}

const sampleData = [
  {
    id: nanoid(),
    user: {
      profileImg:
        "https://lh3.googleusercontent.com/a/ALm5wu11wN_BukYeweQtfKCh5-yO1Uv7Ndy6nl9GG7cf=s96-c",
      name: "선규",
    },
    content: "아주코드 너무 조아요 아주코드 너무 조아요 아주코드 너무 조아요",
    createdTime: new Date(),
    likeCount: 1234,
  },
  {
    id: nanoid(),
    user: {
      profileImg:
        "https://lh3.googleusercontent.com/a/ALm5wu11wN_BukYeweQtfKCh5-yO1Uv7Ndy6nl9GG7cf=s96-c",
      name: "선규",
    },
    content: "와 이거 머임 ??\n쩐다",
    createdTime: new Date(),
    likeCount: 1234,
  },
  {
    id: nanoid(),
    user: {
      profileImg:
        "https://lh3.googleusercontent.com/a/ALm5wu11wN_BukYeweQtfKCh5-yO1Uv7Ndy6nl9GG7cf=s96-c",
      name: "선규",
    },
    content: "조아요",
    createdTime: new Date(),
    likeCount: 1234,
  },
  {
    id: nanoid(),
    user: {
      profileImg:
        "https://lh3.googleusercontent.com/a/ALm5wu11wN_BukYeweQtfKCh5-yO1Uv7Ndy6nl9GG7cf=s96-c",
      name: "선규",
    },
    content: "아주코드 너무 조아요 아주코드 너무 조아요 아주코드 너무 조아요",
    createdTime: new Date(),
    likeCount: 1234,
  },
];

const Feedback = ({
  user,
  content,
  createdTime,
  onLike,
  likeCount,
}: FeedbackProps) => {
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    ...result
  } = useInfiniteQuery(["feedback"], {
    queryFn: async ({ pageParam = 0 }) => {
      return (
        await request.get("/feedback", {
          params: {
            skip: pageParam * 20,
            take: 20,
          },
        })
      ).data;
    },
    // getNextPageParam: (lastPage, allPages) => lastPage,
  });
  console.log(data);

  return (
    <Box className="w-full">
      <div className="flex gap-5 items-center mb-5">
        <img className="w-10 h-10 rounded-full" src={user.profileImg} />

        <div className="flex flex-col gap-1">
          <div className="text-sm">
            <p className="text-gray-600">
              <b className="text-black">{user.name}</b>님이 피드백을 작성했어요.
            </p>
          </div>
          <div className="text-xs text-gray-700">아주대학교 학생</div>
        </div>
      </div>

      <div className="my-5 whitespace-pre-line">
        <p>{content}</p>
      </div>

      <p className="text-xs text-gray-600 mb-1">2시간 전</p>

      <div
        onClick={onLike}
        className="flex gap-1 items-center select-none cursor-pointer w-fit"
      >
        <HeartIcon className="w-6 h-6" filled />
        <p className="text-sm">{likeCount}</p>
      </div>
    </Box>
  );
};

// 무한 스크롤
const FeedbackWriter = () => {
  const [content, setContent] = useState("");

  const { mutate } = useMutation({
    mutationFn: (data: Record<"content", string>) =>
      request.post("/feedback", data),
    onError() {
      toast.error("피드백 작성에 실패하였습니다.");
    },
    onSuccess() {
      toast.success("피드백 작성 성공");
    },
  });

  const handleWrite = useCallback(() => {
    if (!content) {
      toast.warn("피드백이 비어있어요 !");
    }

    mutate({
      content,
    });
  }, [mutate, content]);

  return (
    <div className="w-full mt-3 mb-5">
      <div className="flex gap-3 items-center mb-3">
        <img
          className="w-6 h-6 rounded-full"
          src={
            "https://lh3.googleusercontent.com/a/ALm5wu11wN_BukYeweQtfKCh5-yO1Uv7Ndy6nl9GG7cf=s96-c"
          }
        />

        <div className="flex flex-col gap-1">
          <p className="text-gray-600 text-sm">
            <b className="text-black">{"선규"}</b>님의 피드백
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
  );
};

export function FeedbackPage() {
  return (
    <Padding className="flex flex-col gap-3">
      <FeedbackWriter />
      {sampleData.map((data) => (
        <Feedback key={data.id} {...data} />
      ))}
    </Padding>
  );
}
