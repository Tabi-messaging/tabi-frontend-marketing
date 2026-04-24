import { LucideIcon } from "lucide-react";

export function FeatureToggleRow({
  label,
  Icon,
  bgColor,
}: {
  label: string;
  Icon: LucideIcon;
  bgColor: string;
}) {
  return (
    <div
      className="group flex h-18 w-full items-center gap-4 rounded-2xl p-3 transition-all"
      style={{ backgroundColor: "rgba(26, 13, 64, 0.8)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor =
          "var(--color-section-dark-hover)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(26, 13, 64, 0.8)")
      }
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-lg"
        style={{ backgroundColor: bgColor }}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <span className="flex-1 truncate text-lg font-semibold text-white">
        {label}
      </span>
      <div
        className="flex h-7 w-12 items-center rounded-full px-1 justify-end shadow-inner"
        style={{ backgroundColor: "var(--color-button-blue)" }}
      >
        <div className="h-5 w-5 rounded-full bg-white shadow-md" />
      </div>
    </div>
  );
}
