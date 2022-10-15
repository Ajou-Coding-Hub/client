import Padding from "@/components/atoms/Padding";
import React from "react";
import Button from "@/components/atoms/Button";
import { ListGroup } from "flowbite-react";
import MarkDownEditor from "@/components/organisms/MarkDownEditor";

const guideTemplate = `## 문제 가이드

위에서 설정한 스텝을 어디에 위치할지 정해주셔야해요 !  
**[STEP-(number)]** 와 같은 형식으로 (number) 안에 스텝의 숫자를 작성하면 해당 위치에 스텝에 위치합니다.

* example  
[STEP-1]  

이제 시작해보세요 !`;

function SetStepView() {
  return (
    <>
      <div className="flex gap-7 justify-between mb-10">
        <div className="flex-auto">
          <div className="h-full overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    스텝 설명
                  </th>
                  <th scope="col" className="py-3 px-6">
                    스텝 조건 타입
                  </th>
                  <th scope="col" className="py-3 px-6">
                    스텝 조건
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="py-4 px-6">Sliver</td>
                  <td className="py-4 px-6">Laptop</td>
                  <td className="py-4 px-6">
                    <p className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">
                      DELETE
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-5">
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                스텝 설명
              </label>
              <input
                type="email"
                id="email"
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
                  color="black"
                  active={true}
                  onClick={function onClick() {
                    return alert("Profile clicked!");
                  }}
                >
                  파일 생성 체크
                </ListGroup.Item>
                <ListGroup.Item>문법 체크</ListGroup.Item>
              </ListGroup>
              <label
                htmlFor="email"
                className="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                스텝 조건 파일
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              />
              <label
                htmlFor="email"
                className="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                스텝 조건
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              />
            </div>
            <Button className="w-full justify-center">스텝 생성</Button>
          </form>
        </div>
      </div>
    </>
  );
}
function GuideUploadPage() {
  const [value, setValue] = React.useState(guideTemplate);

  return (
    <Padding>
      <div>
        <h1 className="text-sm mb-3 font-bold">문제 스텝 설정</h1>
        <SetStepView />
      </div>
      <div>
        <h2 className="text-sm font-bold mb-3">문제 설명 마크다운 설정</h2>
        <div>
          <MarkDownEditor
            value={value}
            onChange={(text) => setValue(text ?? "")}
          />
        </div>
      </div>
      <Button className="w-full justify-center my-10 h-14">업로드</Button>
    </Padding>
  );
}

export default GuideUploadPage;
