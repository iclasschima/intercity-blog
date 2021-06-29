"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    console.log(123);
    const categories = await strapi.services.category.find(ctx.query);

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      //   published_at: "2021-06-29T09:57:54.843Z",
      //   createdAt: "2021-06-29T09:54:06.437Z",
      //   updatedAt: "2021-06-29T11:13:21.756Z",
      //   created_by: category.created_by,
      //   updated_by: category.updated_by,
    }));
  },
};
