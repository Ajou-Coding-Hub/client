import request from "@/apis";
import { GithubRepository, GithubTokenType, WorkspaceType } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useWorkspaceQuery = () => {
  const query = useQuery(["workspace"], {
    queryFn: () => request.get<WorkspaceType[]>("/workspace"),
    select({ data }) {
      return data.map((_data) => ({
        ..._data,
        domain: [_data.id, "workspace.ajou.codes"].join("."),
      }));
    },
  });
  return query;
};

// TODO: 급하게 개발로 임시 polling 사용
// 팝업이 꺼지면 해당 이벤트가 팝업을 킨 부모한테 트리거가 되는 방식으로 바꿔야함
export const useGithubTokenQuery = ({
  polling,
}: Record<"polling", boolean>) => {
  const query = useQuery(["github"], {
    queryFn: () => request.get<GithubTokenType>("/user/github"),
    select({ data }) {
      return data;
    },
    ...(polling && {
      refetchInterval: (data: any) => {
        if (!data) return 2000;
        return false;
      },
      refetchIntervalInBackground: true,
    }),
  });
  return query;
};

export const useRepositoriesQuery = ({
  polling,
}: Record<"polling", boolean>) => {
  const query = useQuery(["repositories"], {
    queryFn: () => request.get<GithubRepository[]>("/user/repositories"),
    select({ data }) {
      return data;
    },
    ...(polling && {
      refetchInterval: (data: any) => {
        if (!data) return 2000;
        return false;
      },
      refetchIntervalInBackground: true,
    }),
  });
  return query;
};
