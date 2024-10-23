import React, { useEffect, useState } from "react";
import { BlogPostCard } from "./BlogPostCard";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const AllBlogs = () => {
  const [allPosts, setAllPosts] = useState(() => {
    const savedPosts = localStorage.getItem("allPosts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [loading, setLoading] = useState(() => {
    return localStorage.getItem("allPosts") ? false : true;
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (allPosts.length === 0) {
      fetch("https://dummyjson.com/posts")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setAllPosts(data.posts);
          setLoading(false);
          localStorage.setItem("allPosts", JSON.stringify(data.posts));
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [allPosts]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMsg={error} />;
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {allPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
