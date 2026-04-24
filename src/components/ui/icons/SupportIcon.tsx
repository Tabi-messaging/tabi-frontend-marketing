import React from "react";
import { cn } from "@/utils/cn";

import { IconProps } from "@/interfaces/IconProps";

function SupportIcon({
  size = 24,
  strokeWidth = 2.24,
  className,
  color,
  ...props
}: IconProps) {
  const strokeColor = color || "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path
        d="M17.9399 32.3235C25.3715 32.3235 31.3949 26.2986 31.3949 18.8685C31.3949 11.4368 25.3715 5.41345 17.9399 5.41345C10.5082 5.41345 4.48486 11.4368 4.48486 18.8685C4.48486 26.2986 10.5082 32.3235 17.9399 32.3235Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.1142 18.8671C24.1142 22.2757 21.3514 25.0385 17.9428 25.0385C14.5342 25.0385 11.77 22.2757 11.77 18.8671C11.77 15.4585 14.5342 12.6957 17.9428 12.6957C21.3514 12.6957 24.1142 15.4585 24.1142 18.8671Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5815 23.225L8.42676 28.3797"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3052 23.2308L27.4569 28.3826"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.42676 9.35535L13.5801 14.5086"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3052 14.5056L27.4555 9.35535"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SupportIcon;
