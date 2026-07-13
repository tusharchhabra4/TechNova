import { notFound } from "next/navigation";

import { getContentBySlug } from "@/lib/getContentBySlug";

import BlockRenderer from "../_components/BlockRenderer";
import ServiceDetail from "../_components/ServiceDetail";

import BlogDetail from "../_components/BlogDetail";
import ResourceDetail from "../_components/ResourceDetail";

import CaseStudyDetail from "../_components/CaseStudyDetail";

export default async function Page({ params }) {
  const resolvedParams = await params;

  const slugParts = resolvedParams.slug || [];

  const slug =
    slugParts.length > 1 ? slugParts[slugParts.length - 1] : slugParts[0];

  const result = await getContentBySlug(slug);

  if (!result) {
    notFound();
  }

  switch (result.type) {
    case "page":
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

    case "service":
      return <ServiceDetail service={result.data} />;

    case "blog":
      return <BlogDetail blog={result.data} />;

    case "resource":
      return <ResourceDetail resource={result.data} />;

    
    case "case-study":
      return <CaseStudyDetail caseStudy={result.data} />;

    default:
      notFound();
  }
}
