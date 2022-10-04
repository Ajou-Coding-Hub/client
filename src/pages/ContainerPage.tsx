/* This example requires Tailwind CSS v2.0+ */
import { classNames } from "@/utils/class";
import { InboxIcon, CubeTransparentIcon } from "@heroicons/react/outline";

const items = [
  {
    title: "Create a Container",
    description: "Container를 생성합니다.",
    icon: InboxIcon,
    background: "bg-gray-500",
  },
  {
    title: "Create a Container",
    description: "Container를 생성합니다.",
    icon: InboxIcon,
    background: "bg-gray-500",
  }
];

function ContainerPage() {
  return (
    <div className="w-full h-full">
        <div className="h-full mt-29 border-r border-gray-200 float-left">
            <aside className="mr-5 w-56" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-white rounded dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                                </svg>
                                <span className="ml-3">모든 컨테이너</span>
                            </a>
                    </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">내 컨테이너</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">공유받은 컨테이너</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
        <div className="px-56 py-10">
            <h2 className="ml-10 text-lg font-medium text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-5 w-6 h-6 float-left">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                </svg>
                모든 컨테이너
            </h2>
            <ul
                role="list"
                className="ml-10 mt-6 border-t border-gray-200 py-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
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
    </div>
  );
}

export default ContainerPage;
