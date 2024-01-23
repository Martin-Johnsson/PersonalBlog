import { gql } from 'graphql-tag';

export const BLOG_POSTS = gql`
  query {
    blogPosts {
      data {
        id
        attributes {
          title
          body
        }
      }
    }
  }
`;
