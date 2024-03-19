// import { getClient } from '../../../graphql/client';
// import { BLOG_POSTS } from '../../../graphql/queries';

// const dynamic = 'force-dynamic';

// interface Response {
//   id: number;
//   attributes: { title: string };
//   email: string[];
// }

// export async function fetchBlogPosts() {
//   const response = await getClient().query({
//     query: BLOG_POSTS,
//   });

//   const blogPosts = response.data.blogPosts.data[0].id;
//   return blogPosts;
// }
