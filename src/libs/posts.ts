import { getCollection, type CollectionEntry } from "astro:content";

let cachedPosts: CollectionEntry<"blog">[] | null = null;
let cachedCategories: string[] | null = null;

export async function getSortedPosts() {
  if (!cachedPosts) {
    const posts = await getCollection("blog");
    cachedPosts = posts.sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );
  }
  return cachedPosts;
}

export async function getRecentPosts(limit = 10) {
  const posts = await getSortedPosts();
  return posts.slice(0, limit);
}

export async function getCategories() {
  if (!cachedCategories) {
    const posts = await getSortedPosts();
    const categoriesSet = new Set<string>();
    for (const post of posts) {
      for (const cat of post.data.categories) {
        categoriesSet.add(cat);
      }
    }
    cachedCategories = Array.from(categoriesSet);
  }
  return cachedCategories;
}
