"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/page-by-slug/:slug",
      handler: "page-by-slug.findBySlug",
      config: {
        auth: false,
      },
    },
  ],
};