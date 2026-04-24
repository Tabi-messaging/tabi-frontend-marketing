import { cn } from "@/utils/cn";

import { IconProps } from "@/interfaces/IconProps";

function MultipleUsersIcon({
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
        d="M27.8442 21.6367C31.4837 22.3835 32.8144 24.8042 32.8144 26.8259"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.0356 9.27951C28.6924 9.81421 29.8874 11.3708 29.8806 13.2057C29.8738 14.9626 28.7654 16.4598 27.2104 17.042"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.28369 29.8988C8.28369 26.7466 10.7722 22.8221 17.9388 22.8221C25.1056 22.8221 27.594 26.7178 27.594 29.8718"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.1085 12.1469C24.1085 15.5537 21.3466 18.3137 17.9415 18.3137C14.5347 18.3137 11.7729 15.5537 11.7729 12.1469C11.7729 8.74006 14.5347 5.98 17.9415 5.98C21.3466 5.98 24.1085 8.74006 24.1085 12.1469Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.0356 21.6367C4.39623 22.3835 3.06543 24.8042 3.06543 26.8259"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8445 9.27951C7.18777 9.81421 5.99274 11.3708 5.99954 13.2057C6.00633 14.9626 7.11477 16.4598 8.66966 17.042"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MultipleUsersIcon;
