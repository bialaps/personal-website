import { defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import Error from "~/components/ui/Error";
import Loading from "~/components/ui/Loading";

interface Github {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
}

export const loader = async () => {
  const res = fetch(
    "https://api.github.com/users/marcelbialas/repos?sort=created&direction=desc",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  const data = res.then((data) => data.json());
  return defer({ response: data });
};

export default function Projects() {
  const { response } = useLoaderData<{ response: Github[] }>();

  return (
    <div>
      <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-emerald-500 pt-6 pb-8">
        Projects
      </h2>
      <Suspense fallback={<Loading />}>
        <Await resolve={response} errorElement={<Error />}>
          {(response: Github[]) => (
            <ul className="flex flex-col gap-4">
              {response.map((res) => (
                <Link to={res.html_url} key={res.id} className="">
                  <li className="border-2 rounded-2xl p-6 dark:border-gray-600 dark:hover:bg-gray-950 dark:hover:border-emerald-500 hover:border-emerald-500 hover:bg-gray-100 transition-all duration-200">
                    <h3 className="text-xl font-bold">{res.full_name}</h3>
                    <span className="block text-gray-500 pt-1">
                      {res.description || "No description provided."}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
