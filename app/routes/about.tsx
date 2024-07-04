import { Link } from "@remix-run/react";
import { Linkedin } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="w-full mt-5 text-gray-900 dark:text-gray-200">
        <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-emerald-500 pb-4">
          About Me
        </h2>
        {/* <img
          src="https://monza-closed.web.app/static/media/pic5.efe583754b7d2a5184f8.jpg"
          alt="Indoor Karting track in Herne, Germany"
          className="h-[200px] md:h-[300px] w-full object-cover mb-1 mt-3 rounded-2xl grayscale"
        />
        <small className="text-gray-400 block mb-6 ">
          Go-kart track where I did my first laps
        </small> */}
      </div>
      <p className="md:text-xl text-lg font-medium">
        Hello, I&aposm Marcel, a 29-year-old from the beautiful Ruhr area,
        living in Herne. I discovered my passion for motorsport and music at an
        early age. For many years, I worked at a karting track, where I was able
        to turn my enthusiasm for motorsport into a profession. In addition, I
        used to be a drummer in a local metal band and played the trumpet in a
        big band.
      </p>
      <p className="md:text-xl text-lg font-medium py-4">
        My interest in development began when I was about 14 years old, when I
        created my first website with a website builder. Curious about how the
        whole thing works, I expanded my knowledge and acquired further skills
        in web development over the years.
      </p>
      <p className="md:text-xl text-lg font-medium">
        Today, my focus is on creating user-friendly digital experiences through
        clean code and appealing design. I am always on the lookout for new
        technologies and projects that challenge and expand my skills.
      </p>
      <Link
        to="https://www.linkedin.com/in/marcel-bialas-a4374a28b/"
        className="my-12"
      >
        <button className="flex items-center justify-center bg-gray-200 text-gray-900 rounded-2xl py-3 px-6 font-bold md:text-xl gap-3 mt-6 md:mb-6 mb-16 hover:bg-emerald-500 transition-all duration-300">
          <Linkedin />
          View CV on LinkedIn
        </button>
      </Link>
    </>
  );
}
