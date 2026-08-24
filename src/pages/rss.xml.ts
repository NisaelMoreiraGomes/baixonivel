import { getRecentPosts } from "../libs/posts";
import rss from "@astrojs/rss";
import { SITE_CONFIG, HOME_PAGE } from "../const";
import type { APIContext } from "astro";

export async function GET({ site }: APIContext) {
  if (!site) {
    throw new Error("The site context was not found.");
  }

  const posts = await getRecentPosts(20);
  return rss({
    title: SITE_CONFIG.name,
    description: HOME_PAGE.description,
    site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.id}/`,
    })),
  });
}
