import { gql } from 'graphql-tag';

export const LIST_BLOG = gql(`query {
  blogPosts {
    data {
      id
      attributes {
        title
      }
    }
  }
}`);

export const SINGLE_BLOG = gql(`query ($blogId: string!) {
  blogPosts(filters: {id: {eq: $blogId}}) {
    data {
      id
      attributes {
        title
        description
        body
      }
    }
  }
}`);

export const LIST_ID = gql(`query {
  blogPosts {
    data {
      id
    }
  }
}`);