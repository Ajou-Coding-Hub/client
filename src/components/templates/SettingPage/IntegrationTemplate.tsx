import Ping from "@/components/atoms/Ping";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { classNames } from "@/utils/class";
import Github from "@/utils/github";
import { useGithubTokenQuery } from "@/queries";

function ProviderDropdown() {
  return (
    <>
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="cursor-pointer hover:bg-gray-300 hover:rounded-full active:ring p-1">
            <DotsVerticalIcon className="h-5" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="bg-white origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => Github.openAuth()}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "cursor-pointer block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Connect
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export function IntegrationTemplate() {
  const { data, isSuccess } = useGithubTokenQuery({ polling: true });

  return (
    <div>
      <h2 className="text-xl font-bold mb-1">Git Providers</h2>
      <p className="text-sm mb-5">Manage permissions for Git providers</p>

      <div className="flex items-center w-full p-5">
        <div className="flex justify-between w-full">
          <div className="flex">
            <div className="flex items-center mr-5">
              <Ping active={isSuccess} />
            </div>
            <div>
              <p>Github</p>
              <p className="text-sm text-gray-500">github.com</p>
            </div>
          </div>
          <div>
            <p>{isSuccess ? data.username : "-"}</p>
            <p className="text-sm text-gray-500">Username</p>
          </div>
          <div>
            <p>{isSuccess ? data.email : "-"}</p>
            <p className="text-sm text-gray-500">Email</p>
          </div>
          <div>
            <p>{isSuccess ? data.scope : "-"}</p>
            <p className="text-sm text-gray-500">Permissions</p>
          </div>
          <div className="flex items-center">
            <ProviderDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
