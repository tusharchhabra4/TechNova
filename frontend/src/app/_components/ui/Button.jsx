import Link from "next/link";
import { buttonVariants } from "@/constants/variants";

export default function Button({ data }) {
  return (
    <Link
      href={data.href}
      className={`
        inline-flex
        items-center
        justify-center
        px-6
        py-3
        rounded-lg
        transition-all
        ${buttonVariants[data.variants] ||
          buttonVariants.Primary}
      `}
    >
      {data.text}
    </Link>
  );
}