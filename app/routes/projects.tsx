import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Bug } from "lucide-react";

interface Github {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
}

export const loader = async () => {
  const res = await fetch(
    "https://api.github.com/users/marcelbialas/repos?sort=created&direction=desc",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  const data: Github[] = await res.json();
  return json(data);
};

export default function Projects() {
  const response = useLoaderData<Github[]>();

  return (
    <div>
      <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-emerald-500 pt-6 pb-8">
        Projects
      </h2>
      <ul className="flex flex-col gap-4">
        {response.length > 0 ? (
          response.map((res) => (
            <Link to={res.html_url} key={res.id} className="">
              <li className="border-2 rounded-2xl p-6 dark:border-gray-600 dark:hover:bg-gray-950 dark:hover:border-emerald-500 hover:border-emerald-500 hover:bg-gray-100 transition-all duration-200">
                <h3 className="text-xl font-bold">{res.full_name}</h3>
                <span className="block text-gray-500 pt-1">
                  {res.description || "No description provided"}
                </span>
              </li>
            </Link>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center pt-24 text-gray-900">
            <Bug size="48" className="" />
            <h2 className="text-2xl md:text-4xl font-bold pt-2">
              Something went wrong :/
            </h2>
            <h3 className="text-md md:text-lg font-medium pt-2 text-gray-500">
              We are already working on fixing it
            </h3>
          </div>
        )}
      </ul>
    </div>
  );
}
