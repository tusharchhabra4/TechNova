import { getPage } from "@/lib/getPage";
import { getService } from "@/lib/getService";

import BlockRenderer from "../_components/BlockRenderer";
import ServiceDetail from "../_components/ServiceDetail";

export default async function Page({ params }) {
  const resolvedParams = await params;

  const slugParts = resolvedParams.slug || [];

  const pageSlug = slugParts.join("/") || "home";

  // Check normal pages first
  const page = await getPage(pageSlug);

  if (page) {
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

  // Check service detail pages
  let serviceSlug = null;

  if (slugParts[0] === "services") {
    serviceSlug = slugParts[1];
  }

  if (serviceSlug) {
    const service = await getService(serviceSlug);

    if (service) {
      return <ServiceDetail service={service} />;
    }
  }

  return <h1>Page Not Found</h1>;
}
