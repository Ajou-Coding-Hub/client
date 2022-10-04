/* This example requires Tailwind CSS v2.0+ */
import { classNames } from "@/utils/class";
import { TerminalIcon, CubeTransparentIcon } from "@heroicons/react/outline";

const items = [
  {
    title: "Create a Project",
    description: "Online VS Code를 생성합니다.",
    icon: CubeTransparentIcon,
    background: "bg-indigo-500",
  },
  {
    title: "파이썬 기초",
    description: "개인용 터미널을 만듭니다.",
    icon: TerminalIcon,
    background: "bg-purple-500",
  },
];

function ProjectPage() {
  return (
    <div className="px-56 py-10">
      <h2 className="text-lg font-medium text-gray-900">Projects 🚀</h2>
      <p className="mt-1 text-sm text-gray-500">
        프로젝트를 만들어서 배포까지 해보세요.
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

export default ProjectPage;
