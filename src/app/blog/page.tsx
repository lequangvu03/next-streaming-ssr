import React, { Suspense } from "react";
import PostList from "~/components/PostList";

async function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Posts</h1>
      <p>
        Welcome to our blog! Here you will find a collection of articles that
        discuss various topics ranging from technology, health, lifestyle, and
        more.
      </p>
      <p>
        Each article is carefully crafted to provide insightful information and
        thought-provoking ideas. Stay tuned for our latest posts!
      </p>
      <p className="underline">Explore the posts below:</p>
      <Suspense fallback={<p>Loading...</p>}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default Page;
