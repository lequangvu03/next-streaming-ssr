import Link from "next/link";
import React from "react";

function PostItem({
  post,
}: {
  post: { id: number; title: string; body: string };
}) {
  return (
    <Link
      href={`/blog/post/${post.id}`}
      key={post.id}
      className="p-4 rounded-xl border block mt-2 hover:bg-slate-400"
    >
      <h2>
        <span className="font-bold">Title:</span> {post.title}
      </h2>
      <p>
        <span className="font-bold">Body:</span> {post.body}
      </p>
    </Link>
  );
}

async function PostList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div>
      {posts.map((post: { id: number; title: string; body: string }) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
