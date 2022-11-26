import Padding from "@/components/atoms/Padding";
import { Sidebar } from "@/components/molecules/Sidebar";
import { IntegrationTemplate } from "@/components/templates/SettingPage/IntegrationTemplate";
import { AccountTemplate } from "@/components/templates/SettingPage/AccountTemplate";
import { UserIcon } from "@heroicons/react/outline";
import { useMemo } from "react";
import { BiGitBranch } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid/non-secure";

export default function SettingPage({
  menu,
}: Record<"menu", "account" | "integration">) {
  const location = useLocation();

  const sidebarItems = useMemo(
    () => [
      {
        icon: <UserIcon className="w-6 h-6" />,
        name: "Account",
        to: "/settings/account",
        active: location.pathname === "/settings/account",
        key: nanoid(),
      },
      {
        icon: <BiGitBranch className="w-6 h-6" />,
        name: "Integrations",
        to: "/settings/integration",
        active: location.pathname === "/settings/integration",
        key: nanoid(),
      },
    ],
    [location]
  );

  const headerItems = useMemo(
    () => ({
      account: {
        title: "Account",
        subtitle: "Manage account and Git configuration.",
      },
      integration: {
        title: "Integrations",
        subtitle: "Manage permissions for Git providers and integrations.",
      },
    }),
    []
  );

  const selectHeader = useMemo(() => headerItems[menu], [menu]);

  const selectBody = useMemo(() => {
    switch (menu) {
      case "account":
        return <AccountTemplate />;
      case "integration":
        return <IntegrationTemplate />;
    }
  }, [menu]);

  return (
    <Padding>
      <div>
        <h1 className="text-4xl font-bold mb-1 mt-5">{selectHeader.title}</h1>
        <p className="text-base">{selectHeader.subtitle}</p>
        <hr className="my-8" />
      </div>

      <div className="flex gap-12 drag">
        <div className="w-44">
          <Sidebar items={sidebarItems} />
        </div>

        <div className="flex-1">{selectBody}</div>
      </div>
    </Padding>
  );
}
