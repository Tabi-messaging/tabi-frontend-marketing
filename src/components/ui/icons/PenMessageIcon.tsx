import { cn } from "@/utils/cn";

import { IconProps } from "@/interfaces/IconProps";

export default function PenMessageIcon({
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
        d="M12.7423 8.74219L27.5028 10.636C29.9308 10.9184 31.6632 13.1258 31.3603 15.5512L30.6315 21.3886C30.2745 24.2478 26.9127 25.3683 23.6738 24.2088C23.6738 27.5277 21.3232 31.2262 18.2369 30.8482L10.336 29.6977C7.94242 29.4045 6.23081 27.2393 6.49822 24.8427L7.86149 12.6245"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.6216 21.7804C29.7506 26.1329 26.8905 31.3973 18.1855 30.8583"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.11038 9.91579C3.8202 8.67751 4.77632 7.32077 5.7323 6.32471C6.68828 5.32866 8.00464 4.31767 9.29483 5.55595L18.9351 15.1032C19.3271 15.4795 19.5527 15.9967 19.5616 16.54L19.6063 19.2724C19.6125 19.6453 19.3168 19.9534 18.9439 19.9627L16.2119 20.03C15.6688 20.0434 15.1427 19.8393 14.7506 19.4631L5.11038 9.91579Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.73828 12.3971L11.9031 8.2323"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

