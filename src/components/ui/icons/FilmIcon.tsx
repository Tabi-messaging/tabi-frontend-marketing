import { IconProps } from "@/interfaces/IconProps";
import { cn } from "@/utils/cn";

import React from "react";

function FilmIcon({
  size = 24,
  strokeWidth = 2.24,
  className,
  stroke,
  fill="none",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path
        d="M4.48486 24.4426V11.4407C4.48486 7.46428 7.29273 4.98718 11.2663 4.98718H24.6134C28.587 4.98718 31.3949 7.46428 31.3949 11.4422V24.4426C31.3949 28.419 28.587 30.8947 24.6134 30.8947H11.2663C7.29273 30.8947 4.48486 28.4073 4.48486 24.4426Z"
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.1553 19.4747C20.0697 20.4568 18.7147 21.3414 17.2225 21.9431C15.9519 22.4429 14.8883 21.8193 14.7323 20.5676C14.5415 18.7214 14.5458 16.9553 14.7323 15.3074C14.9028 14.0062 16.0744 13.454 17.2225 13.9377C18.6914 14.5395 20.0099 15.3555 21.1553 16.4061C22.1345 17.292 22.1578 18.5525 21.1553 19.4747Z"
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.3944 11.4986H25.9434M31.3944 17.9066H25.9434M31.3944 24.3152H25.9434"
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.52002 11.4986H9.93466M4.52002 17.9066H9.93466M4.52002 24.3152H9.93466"
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.93945 5.15649V30.7259"
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.9404 30.7274V5.15649"
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FilmIcon;
