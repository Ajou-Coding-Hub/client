import request from "@/apis";
import Button from "@/components/atoms/Button";
import ClickableOpacity from "@/components/atoms/ClickableOpacity";
import Language from "@/components/atoms/Language";
import Padding from "@/components/atoms/Padding";
import Input from "@/components/molecules/Input";
import { useForm } from "@/hooks/useForm";
import { useRepositoriesQuery } from "@/queries";
import { GithubRepository } from "@/types";
import { Listbox } from "@headlessui/react";
import { useMutation } from "@tanstack/react-query";
import { Alert } from "flowbite-react";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillGithub } from "react-icons/ai";
import { classNames } from "@/utils/class";
import Github from "@/utils/github";

type RuntimeLangType = "blank" | "nodejs" | "python" | "java" | "golang";

const version: Record<RuntimeLangType, string> = {
  blank: "-",
  golang: "1.19.2",
  java: "21",
  nodejs: "16.18.0",
  python: "3.9.1",
};

function CreateWorkspacePage() {
  const navigate = useNavigate();

  const [runtimeLang, setRuntimeLang] = useState<RuntimeLangType>("blank");
  const { form, handleChange } = useForm<
    Record<"name" | "description", string>
  >(["name", "description"]);

  const deployDomain = useMemo(() => {
    return [!form.name ? "<name>" : form.name, "workspace.ajou.codes"].join(
      "."
    );
  }, [form.name]);

  const { mutate } = useMutation({
    mutationFn: (data: Record<"name" | "description", string>) =>
      request.post("/workspace", data),
    onError({ response }: any) {
      toast.error(response?.data?.message ?? "워크스페이스 생성 실패");
    },
    onSuccess() {
      toast.success("워크스페이스 생성 성공");
      navigate("/workspace");
    },
  });

  const createWorkspace = useCallback(() => {
    mutate(form);
  }, [mutate, form]);

  const { data: repositories, isError } = useRepositoriesQuery({
    polling: true,
  });
  const [selectRepository, setSelectRepository] =
    useState<GithubRepository | null>(null);
  return (
    <Padding>
      <h1 className="font-bold text-2xl mb-5">워크스페이스 생성</h1>
      <div className="mb-5">
        <Input
          id="name"
          value={form.name}
          onChange={handleChange}
          label="워크스페이스 이름"
          placeholder="알파벳, 숫자, _ 만 포함해주세요."
        />
        <Input
          id="description"
          value={form.description}
          onChange={handleChange}
          label="워크스페이스 설명"
          placeholder="워크스페이스에 대한 설명을 적어주세요."
        />
      </div>

      <Alert>
        <div className="leading-relaxed">
          <p>Git 레포지토리를 선택하면 관련 설정까지 같이할게요 !</p>
          <p>관련 설정은 우측 상단 Setting에서도 진행할 수 있어요.</p>
        </div>
      </Alert>

      <div className="mt-5 mb-5">
        <p className="text-sm mb-2">Git 레포지토리 선택</p>
        <div className="w-full">
          <Listbox value={selectRepository} onChange={setSelectRepository}>
            <Listbox.Button className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full p-2.5 flex gap-2">
              {selectRepository ? (
                <>
                  <AiFillGithub className="h-5 w-5" />
                  <p className="text-left">{selectRepository?.full_name}</p>
                </>
              ) : (
                <p>없음</p>
              )}
            </Listbox.Button>
            <Listbox.Options
              className={
                "bg-white absolute mt-2 max-h-64 overflow-auto w-5/12 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transform opacity-100 scale-100"
              }
            >
              <Listbox.Option key={"null"} value={null}>
                <div
                  className={classNames(
                    "hover:bg-gray-100 cursor-pointer block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  <p>없음</p>
                </div>
              </Listbox.Option>
              {repositories?.map((repository) => (
                <Listbox.Option
                  key={repository.id}
                  value={repository}
                  disabled={!repository.permissions.pull}
                >
                  <div
                    className={classNames(
                      "hover:bg-gray-100 cursor-pointer block px-4 py-2 text-sm text-gray-700",
                      "flex gap-2 items-center"
                    )}
                  >
                    {repository ? (
                      <>
                        <AiFillGithub className="h-5 w-5" />
                        <p> {repository.full_name}</p>
                      </>
                    ) : (
                      <p>없음</p>
                    )}
                  </div>
                </Listbox.Option>
              ))}
              {isError && (
                <Listbox.Option value={null}>
                  <div
                    className={classNames(
                      "hover:bg-gray-100 cursor-pointer block px-4 py-2 text-sm text-gray-700",
                      "flex gap-2 items-center"
                    )}
                    onClick={() => Github.openAuth()}
                  >
                    <AiFillGithub className="h-5 w-5" />
                    <p>Github 연결하기</p>
                  </div>
                </Listbox.Option>
              )}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>

      <div className="flex gap-5">
        <div>
          <div className="mt-5">
            <p className="text-sm mb-2">런타임 스택</p>
            <div className="flex gap-5">
              {(
                [
                  "blank",
                  "nodejs",
                  "python",
                  "java",
                  "golang",
                ] as RuntimeLangType[]
              ).map((lang) => (
                <ClickableOpacity
                  key={`lang-${lang}`}
                  clicked={runtimeLang === lang}
                  onClick={() => setRuntimeLang(lang)}
                >
                  <div className="flex flex-col gap-1 justify-center items-center">
                    <Language lang={lang} />
                    <p className="text-xs">{lang}</p>
                  </div>
                </ClickableOpacity>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded bg-slate-300 flex-1 mt-5 p-5 h-36">
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-1">런타임 언어</p>
            <p className="text-sm">
              {runtimeLang} ({version[runtimeLang]})
            </p>
          </div>
          <div className="mb-1">
            <p className="text-sm text-gray-600 mb-1">배포 도메인 이름</p>
            <p className="text-sm">{deployDomain}</p>
          </div>
        </div>
      </div>
      <Button
        onClick={createWorkspace}
        className="w-full justify-center mt-12 h-16"
      >
        워크스페이스 생성
      </Button>
    </Padding>
  );
}

export default CreateWorkspacePage;
