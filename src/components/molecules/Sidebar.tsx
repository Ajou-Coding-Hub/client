import { classNames } from "@/utils/class";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  items: {
    icon: JSX.Element;
    name: string;
    to: string;
    active: boolean;
    key: string;
  }[];
}

export function Sidebar({ items }: SidebarProps) {
  const memoItems = useMemo(
    () =>
      items.map(({ icon, name, to, active, key }) => (
        <li
          key={`sidebar-${key}`}
          className={classNames(
            "rounded-lg hover:bg-gray-300 transition",
            active && "bg-gray-300"
          )}
        >
          <Link
            to={to}
            className="flex items-center p-2 space-x-3 rounded-md"
            key={`sidebar-idx`}
          >
            {icon}
            <span>{name}</span>
          </Link>
        </li>
      )),
    [items]
  );
  return (
    <div className="flex gap-12 drag">
      <ul className="space-y-3 flex-1 text-sm">{memoItems}</ul>
    </div>
  );
}
