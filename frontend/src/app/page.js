import { getPage } from "@/lib/getPage";
import BlockRenderer from "./_components/BlockRenderer";

export default async function Home() {
  const page = await getPage("home");

  if (!page) {
    return <h1>Home Page Not Found</h1>;
  }

  return (
    <>
      {page.Blocks?.map((block) => (
        <BlockRenderer
          key={`${block.__component}-${block.id}`}
          block={block}
        />
      ))}
    </>
  );
}