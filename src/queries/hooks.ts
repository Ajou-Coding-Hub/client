import request from "@/apis";
import { WorkspaceStatus } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

type WorkspaceType = {
  id: number;
  name: string;
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
        domain: [_data.name, "workspace.ajou.codes"].join("."),
      }));
    },
  });
  return query;
};

export const useWorkspaceMutate = () => {
  const query = useMutation({
    mutationFn: (data: Pick<WorkspaceType, "name" | "description">) =>
      request.post("/workspace", data),
  });
  return query;
};
