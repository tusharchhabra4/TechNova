import { getContentBySlug } from "@/lib/getContentBySlug";
import BlockRenderer from "./_components/BlockRenderer";

export default async function Home() {
  const result = await getContentBySlug("home");

  if (!result || result.type !== "page") {
    return <h1>Home Page Not Found</h1>;
  }

  return (
    <>
      {result.data.Blocks?.map((block) => (
        <BlockRenderer
          key={`${block.__component}-${block.id}`}
          block={block}
        />
      ))}
    </>
  );
}