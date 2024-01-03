"use client";
import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow
  );
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
