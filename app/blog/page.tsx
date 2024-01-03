import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";

// import { getAllPosts } from "@/services/getPosts";
// import { useEffect, useState } from "react";

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 60 },
//   });
//   return res.json();
// }
// export const metadata: Metadata = {
//   title: "Blog | Next App",
// };

const Blogs = () => {
 

  return (
    <>
      <h1>Blogs</h1>
      <PostSearch
      // onSearch={setPosts}
      />

      <Posts />
    </>
  );
};

export default Blogs;
