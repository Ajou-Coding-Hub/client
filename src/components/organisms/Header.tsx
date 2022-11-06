import { Fragment, useCallback, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "@/utils/class";
import { Link, useLocation, useParams } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "@/store";
import request from "@/apis";

function Profile() {
  const { profile, logout } = useAuth((state) => state);
  return (
    <>
      <button
        type="button"
        className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <img
              className="h-8 w-8 rounded-full"
              src={profile.picture}
              alt=""
            />
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <Menu.Item>
              <div className="px-3 py-5 flex flex-col gap-3 justify-center items-center">
                <img
                  className="h-16 w-16 rounded-full"
                  src={profile.picture}
                  alt=""
                />
                <p className="text-xs">{profile.email}</p>
                <p className="text-sm">{profile.name}님 환영합니다</p>
              </div>
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={() => logout()}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "cursor-pointer block px-4 py-2 text-sm text-gray-700 text-center"
                  )}
                >
                  Sign out
                </p>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

function Header() {
  const location = useLocation();
  const { isLoggedin, setJwtToken, setProfile } = useAuth((state) => state);

  const currentPathClass = useCallback(
    (path: string) =>
      location.pathname !== path
        ? "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
        : "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
    [location]
  );

  const handleGoogleLogin = useCallback(async (accessToken: string) => {
    const response = await request.post("/auth/login", {
      accessToken,
    });
    if (response.status === 201) {
      const { token, profile } = response.data;
      setJwtToken(token);
      setProfile(profile);
    }
  }, []);

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-10 w-auto"
                    src={"/logo.png"}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src={"/logo.png"}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to={"/"} className={currentPathClass("/")}>
                    프로젝트
                  </Link>
                  <Link to={"/guide"} className={currentPathClass("/guide")}>
                    가이드
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {!isLoggedin ? (
                  <GoogleLogin
                    onSuccess={({ credential }) =>
                      credential && handleGoogleLogin(credential)
                    }
                  />
                ) : (
                  <Profile />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
