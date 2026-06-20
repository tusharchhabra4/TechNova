import { imageVariants } from "@/constants/variants";

export default function DynamicImage({
  data,
}) {
  const imageUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data.image.url;

  return (
    <img
      src={imageUrl}
      alt={
        data.image.alternativeText ||
        "Image"
      }
      className={`
        w-full
        h-auto
        object-cover
        ${
          imageVariants[data.variants] ||
          imageVariants.Default
        }
      `}
    />
  );
}