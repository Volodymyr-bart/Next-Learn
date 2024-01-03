"use client";

// import { getPostsBySearch } from "@/services/getPosts";
import { usePosts } from "@/store";
import { FormEventHandler, useState } from "react";
// type Props = {
//   onSearch: (value: any[]) => void;
// };
const PostSearch = () => {
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);
  const [search, setSearch] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault();
    await getPostsBySearch(search);
    // const posts = await getPostsBySearch(search);
    // onSearch(posts);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
