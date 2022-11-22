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
      console.log(data);
      return data.map((_data) => ({
        ..._data,
        domain: [_data.id, "workspace.ajou.codes"].join("."),
      }));
    },
  });
  return query;
};
