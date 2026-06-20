import Hero from "./blocks/Hero";
import Services from "./blocks/Services";
import CTA from "./blocks/CTA";
import FAQ from "./blocks/FAQ";
import Stats from "./blocks/Stats";
import Content from "./blocks/Content";
import ResourceList from "./blocks/ResourceList";
import BlogList from "./blocks/BlogList";
import DocumentationList from "./blocks/DocumentationList";
import CaseStudyList from "./blocks/CaseStudyList";
import ContactFormBlock from "./blocks/ContactFormBlock";


const COMPONENTS = {
  "blocks.hero": Hero,
  "blocks.services": Services,
  "blocks.stats": Stats,
  "blocks.faq": FAQ,
  "blocks.cta": CTA,
  "blocks.content": Content,
  "blocks.resource-list": ResourceList,
  "blocks.blog-list": BlogList,
  "blocks.documentation-list": DocumentationList,
  "blocks.case-study-list": CaseStudyList,
  "blocks.contact-form":ContactFormBlock,
};

export default function BlockRenderer({
  block,
}) {
  const Component =
    COMPONENTS[block.__component];

  if (!Component) {
    console.log(
      "Missing Component:",
      block.__component
    );

    return null;
  }

  return <Component data={block} />;
}