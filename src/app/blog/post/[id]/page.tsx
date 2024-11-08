interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  ).then((res) => res.json());
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());
  return (
    <main>
      <p>{post.id}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
}
