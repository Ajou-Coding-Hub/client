import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

export interface StepProps {
  children: React.ReactNode;
  status: "complete" | "current" | "upcoming";
}

function Step({ children, status }: StepProps) {
  return (
    <li className="list-none my-3">
      {status === "complete" ? (
        <span className="flex items-start">
          <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
            <CheckCircleIcon
              className="h-full w-full text-indigo-600 group-hover:text-indigo-800"
              aria-hidden="true"
            />
          </span>
          <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
            {children}
          </span>
        </span>
      ) : status === "current" ? (
        <div className="flex items-start">
          <span
            className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="animate-ping absolute h-4 w-4 rounded-full bg-indigo-200" />
            <span className="relative block w-2 h-2 bg-indigo-600 rounded-full" />
          </span>
          <span className="ml-3 text-sm font-medium text-indigo-600">
            {children}
          </span>
        </div>
      ) : (
        <div className="flex items-start">
          <div
            className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400" />
          </div>
          <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
            {children}
          </p>
        </div>
      )}
    </li>
  );
}

export default Step;
