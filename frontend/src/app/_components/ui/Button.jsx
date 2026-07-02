import Link from "next/link";
import { buttonVariants } from "@/constants/variants";

export default function Button({
  data,
  children,
  type = "button",
  disabled = false,
  onClick,
}) {
  const variantClass =
    buttonVariants[data?.variants] ??
    buttonVariants.Primary;

  const commonClasses = `
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-lg
    transition-all
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${variantClass}
  `;

  // Navigation Button
  if (data?.href) {
    return (
      <Link
        href={data.href}
        className={commonClasses}
      >
        {data.text}
      </Link>
    );
  }

  // Normal Button (Submit, Reset, etc.)
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={commonClasses}
    >
      {children ?? data?.text}
    </button>
  );
}