import request from "@/apis";
import { WorkspaceStatus } from "@/types";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { toast } from "react-toastify";

export type WorkspaceType = {
  id: string;
  description: string;
  ownerId: number;
  status: WorkspaceStatus;
  createdAt: Date;
  domain: string;
};

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

export type GithubTokenType = {
  id: string;
  accessToken: string;
  scope: string;
  email: string;
  username: string;
};
export const useGithubTokenQuery = ({
  polling,
}: Record<"polling", boolean>) => {
  const query = useQuery(["workspace"], {
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
