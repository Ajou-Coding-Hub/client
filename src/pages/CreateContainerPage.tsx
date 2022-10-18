import Button from "@/components/atoms/Button";
import ClickableOpacity from "@/components/atoms/ClickableOpacity";
import Language, { LangType } from "@/components/atoms/Language";
import Padding from "@/components/atoms/Padding";
import Input from "@/components/molecules/Input";
import { Alert } from "flowbite-react";
import { useState } from "react";

type RuntimeLangType = "blank" | "nodejs" | "python" | "java" | "golang";

type DatabaseType = "blank" | "postgresql" | "mysql" | "mariadb" | "mongodb";

const version: Record<RuntimeLangType, string> = {
  blank: "-",
  golang: "1.19.2",
  java: "21",
  nodejs: "16.18.0",
  python: "3.9.1",
};
const databasePort: Record<DatabaseType, string> = {
  blank: "-",
  mariadb: "3306",
  mysql: "3306",
  postgresql: "5432",
  mongodb: "27017",
};

function CreateContainerPage() {
  const [runtimeLang, setRuntimeLang] = useState<RuntimeLangType>("nodejs");
  const [database, setDatabase] = useState<DatabaseType>("mariadb");

  return (
    <Padding>
      <h1 className="font-bold text-2xl mb-5">프로젝트 생성</h1>
      <div className="mb-5">
        <Input
          label="프로젝트 이름"
          placeholder="알파벳, 숫자, _ 만 포함해주세요."
        />
        <Input
          label="프로젝트 설명"
          placeholder="프로젝트에 대한 설명을 적어주세요."
        />
      </div>
      <Alert>
        {"런타임 스택을 기준으로 배포를 진행할거에요 !"}
        <br />
        {"제공되는 데이터베이스를 사용하면 배포를 수월하게 진행할 수 있어요 !"}
      </Alert>

      <div className="flex gap-5 items-center">
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

          <div className="mt-5">
            <p className="text-sm mb-2">데이터베이스</p>
            <div className="flex gap-5">
              {(
                [
                  "blank",
                  "mariadb",
                  "postgresql",
                  "mysql",
                  "mongodb",
                ] as DatabaseType[]
              ).map((lang) => (
                <ClickableOpacity
                  clicked={database === lang}
                  onClick={() => setDatabase(lang)}
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
        <div className="rounded bg-slate-300 flex-1 mt-5 p-5 h-[245px]">
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-1">런타임 언어</p>
            <p className="text-sm">
              {runtimeLang} ({version[runtimeLang]})
            </p>
          </div>

          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-1">데이터베이스</p>
            <p className="text-sm">{database}</p>
          </div>
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-1">데이터베이스 포트</p>
            <p className="text-sm">{databasePort[database]}</p>
          </div>
          <div className="mb-1">
            <p className="text-sm text-gray-600 mb-1">배포 도메인 이름</p>
            <p className="text-sm">{"gron1gh1.ajou.ac.kr"}</p>
          </div>
        </div>
      </div>
      <Button className="w-full justify-center mt-16 h-16">
        프로젝트 생성
      </Button>
    </Padding>
  );
}

export default CreateContainerPage;
