import React from "react";
import { cn } from "@/utils/cn";

import { IconProps } from "@/interfaces/IconProps";

function ChatCodeIcon({
  size = 24,
  strokeWidth = 2.24,
  className,
  stroke,
  fill = "none",
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
        d="M16.3774 30.2082L14.2523 28.0831C13.6472 27.4779 12.8268 27.139 11.9716 27.139H10.3744C7.12201 27.139 4.48486 24.5018 4.48486 21.2495V10.9118C4.48486 7.65935 7.12201 5.02222 10.3744 5.02222H25.5064C28.7588 5.02222 31.3945 7.65935 31.3945 10.9118V21.2495C31.3945 24.5018 28.7588 27.139 25.5064 27.139H23.9093C23.054 27.139 22.2336 27.4779 21.6285 28.0831L19.5019 30.2082C18.6393 31.0708 17.2415 31.0708 16.3774 30.2082Z"
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6394 12.8942L11.2212 16.3125L14.6394 19.7293"
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.2422 12.8942L24.6605 16.3125L21.2422 19.7293"
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChatCodeIcon;
