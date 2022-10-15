import Padding from "@/components/atoms/Padding";
import React, { useCallback, useState } from "react";
import Button from "@/components/atoms/Button";
import { ListGroup } from "flowbite-react";
import MarkDownEditor from "@/components/molecules/MarkDownEditor";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { StepType } from "@/hooks/useStep";
import Step from "@/components/molecules/Step";

const guideTemplate = `## 문제 가이드

위에서 설정한 스텝을 어디에 위치할지 정해주셔야해요 !  
**[STEP-(number)]** 와 같은 형식으로 (number) 안에 스텝의 숫자를 작성하면 해당 위치에 스텝에 위치합니다.

* example  

[STEP-1] 

이런식으로 렌더링을 테스트 해볼 수 있습니다 !

[STEP-2]

### 이제 시작해보세요 !`;

type StepColumn = Omit<StepType, "status"> & { action: string };
const columnHelper = createColumnHelper<StepColumn>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "스텝 설명",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("type", {
    header: () => "스텝 조건 타입",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("expect", {
    header: () => "스텝 조건",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("action", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

function SetStepView({ data, setData }: any) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const [input, setInput] = useState({
    name: "",
    type: "",
    expectFilename: "",
    expect: "",
  });
  const [type, setType] = useState<"filename" | "code">("filename");

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setInput((input) => ({
        ...input,
        [e.target.id]: e.target.value,
      })),
    [setInput]
  );

  return (
    <>
      <div className="flex gap-7 justify-between mb-10">
        <div className="flex-auto">
          <div className="h-full overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="py-3 px-6" scope="col">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        scope="row"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-5">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              스텝 설명
            </label>
            <input
              type="text"
              id="name"
              value={input.name}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            />
            <label
              htmlFor="email"
              className="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              스텝 조건 타입
            </label>
            <ListGroup>
              <ListGroup.Item
                active={type === "filename"}
                onClick={() => setType("filename")}
              >
                파일 생성 체크
              </ListGroup.Item>
              <ListGroup.Item
                active={type === "code"}
                onClick={() => setType("code")}
              >
                문법 체크
              </ListGroup.Item>
            </ListGroup>
            <label
              htmlFor="expectFilename"
              className="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              스텝 조건 파일
            </label>
            <input
              type="text"
              id="expectFilename"
              value={input.expectFilename}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            />
            <label
              htmlFor="expect"
              className="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              스텝 조건
            </label>
            <input
              type="text"
              id="expect"
              value={input.expect}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            />
          </div>
          <Button
            onClick={() => {
              setData([
                ...data,
                {
                  ...(input as any),
                  type,
                },
              ]);
            }}
            className="w-full justify-center"
          >
            스텝 생성
          </Button>
        </div>
      </div>
    </>
  );
}
function GuideUploadPage() {
  const [data, setData] = useState<StepColumn[]>([
    {
      name: "main.js 파일  생성",
      action: "삭제",
      expect: "console.log('Hello World')",
      type: "filename",
    },
    {
      name: "Hello World 출력",
      action: "삭제",
      expect: "console.log('Hello World')",
      type: "code",
    },
  ]);

  const [value, setValue] = React.useState(guideTemplate);

  return (
    <Padding>
      <div>
        <h1 className="text-sm mb-3 font-bold">문제 스텝 설정</h1>
        <SetStepView data={data} setData={setData} />
      </div>
      <div>
        <h2 className="text-sm font-bold mb-3">문제 설명 마크다운 설정</h2>
        <div>
          <MarkDownEditor
            value={value}
            components={{
              p({ node, className, children, ...props }) {
                const [firstChildren, ..._children] = children;
                console.log(firstChildren, _children);
                if (
                  typeof firstChildren === "string" &&
                  /\[STEP-[0-9]\]/.test(firstChildren)
                ) {
                  const idx =
                    Number(firstChildren.split("-")[1].replace("]", "")) - 1;
                  if (data[idx]) {
                    return (
                      <>
                        <Step status={idx === 0 ? "current" : "upcoming"}>
                          {data[idx].name}
                        </Step>
                        {_children && <p className="mb-1">{_children}</p>}
                      </>
                    );
                  }
                }
                return <p className="mb-1">{children}</p>;
              },
            }}
            onChange={(text) => setValue(text ?? "")}
          />
        </div>
      </div>
      <Button className="w-full justify-center my-10 h-14">업로드</Button>
    </Padding>
  );
}

export default GuideUploadPage;
