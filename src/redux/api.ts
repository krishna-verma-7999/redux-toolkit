import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostProps } from "../types";

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostProps[], string>({
      query: () => "posts",
    }),
    newPosts : builder.mutation<PostProps , string>({
        query : (post) => {
            url : "posts" , 
            method : "POST",
            bo
        }
    })
  }),
});

export const { useGetPostsQuery } = myApi;
