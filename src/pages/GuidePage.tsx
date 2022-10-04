/* This example requires Tailwind CSS v2.0+ */
import { classNames } from "@/utils/class";
import { SiJavascript, SiPython, SiTypescript } from "react-icons/si";

// 서버 데이터 베이스로 저장
const items = [
  {
    title: "자바스크립트 기초",
    description: "Level 1",
    icon: SiJavascript,
    background: "bg-yellow-500",
  },
  {
    title: "타입스크립트 기초",
    description: "Level 1",
    icon: SiTypescript,
    background: "bg-blue-500",
  },
  {
    title: "파이썬 기초",
    description: "Level 1",
    icon: SiPython,
    background: "bg-indigo-500",
  },
];

function GuidePage() {
  return (
    <div className="px-56 py-10">
      <h2 className="text-lg font-medium text-gray-900">Guide 🔥</h2>
      <p className="mt-1 text-sm text-gray-500">
        코딩 기초를 실시간으로 학습하는 공간입니다.
      </p>
      <ul
        role="list"
        className="mt-6 border-t border-b border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 p-2 flex items-center space-x-4 rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500">
              <div
                className={classNames(
                  item.background,
                  "flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg"
                )}
              >
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.title}
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuidePage;
