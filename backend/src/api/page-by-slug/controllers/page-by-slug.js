"use strict";

const collections = [
  {
    uid: "api::page.page",
    type: "page",
  },
  {
    uid: "api::service.service",
    type: "service",
  },
  {
    uid: "api::blog.blog",
    type: "blog",
  },
  {
    uid: "api::resource.resource",
    type: "resource",
  },
  {
    uid: "api::documentation.documentation",
    type: "documentation",
  },
  {
    uid: "api::case-study.case-study",
    type: "case-study",
  },
];

module.exports = {
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    for (const collection of collections) {
      const entry = await strapi.documents(collection.uid).findFirst({
        filters: {
          slug,
        },
        status: "published",
      });

      if (entry) {
        return {
          type: collection.type,
          data: entry,
        };
      }
    }

    return ctx.notFound("Content not found");
  },
};