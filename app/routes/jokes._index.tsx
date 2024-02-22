import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const count = await db.joke.count();
  const randomNumber = Math.floor(Math.random() * count);

  const randomJoke = await db.joke.findMany({
    orderBy: { updatedAt: "desc" },
    skip: randomNumber,
    take: 1,
    select: { id: true, content: true, name: true }
  });
  return randomJoke.pop();
}

export default function JokesIndexRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <p>Here's a random joke:</p>
      <p>
        {data.content}
      </p>
      <Link to={data.id}>Permalink to {data.name}</Link>
    </div>
  );
}
