import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense, useState } from "react";
import Error from "~/components/ui/Error";
import Loading from "~/components/ui/Loading";

interface Github {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
}

export const loader = async () => {
  const res = await fetch(
    "https://api.github.com/users/aeon1n/repos?sort=created&direction=desc",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Response("Failed to fetch repositories", { status: res.status });
  }

  const data = await res.json();
  return { repos: data };
};

export default function Projects() {
  const { repos } = useLoaderData<{ repos: Github[] }>();
  const [visibleCount, setVisibleCount] = useState(5);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const visibleRepos = repos.slice(0, visibleCount);

  return (
    <div>
      <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-emerald-500 pt-6 pb-8">
        Projects
      </h2>
      <Suspense fallback={<Loading />}>
        <Await resolve={repos} errorElement={<Error />}>
          <ul className="flex flex-col gap-4">
            {visibleRepos.map((res) => (
              <Link to={res.html_url} key={res.id} className="">
                <li className="border-2 rounded-2xl p-6 dark:border-gray-600 dark:hover:bg-neutral-900 dark:hover:border-emerald-500 hover:border-emerald-500 hover:bg-gray-100 transition-all duration-200 border-gray-200">
                  <h3 className="text-xl font-bold">{res.full_name}</h3>
                  <span className="block text-gray-500 pt-1">
                    {res.description || "No description provided."}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <div className="w-full flex justify-center">
            {visibleCount < repos.length && (
              <button
                className="flex items-center justify-center bg-gray-200 text-gray-900 rounded-2xl py-3 px-6 font-bold md:text-md gap-3 mt-6 md:mb-6 mb-16 hover:bg-emerald-500 transition-all duration-300 cursor-pointer"
                onClick={loadMore}
              >
                Load more
              </button>
            )}
          </div>
        </Await>
      </Suspense>
    </div>
  );
}
