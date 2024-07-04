import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { Linkedin, Instagram, Github, AtSign } from "lucide-react";

import ProfilePicture from "./../assets/img/vbt.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "Marcel Bialas" },
    {
      name: "description",
      content:
        "I am a front-end developer from Germany with an eye for design and aesthetics",
    },
  ];
};

export default function Index() {
  return (
    <div className="py-4 flex flex-col justify-center items-center text-center tracking-wide">
      <div className="pt-6 pb-12 md:pt-3 md:pb-12">
        <img
          src={ProfilePicture}
          alt="Side Portrait"
          className="w-44 h-44 md:w-46 md:h-46 object-cover grayscale rounded-full"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-emerald-500">
        Hello, I am Marcel!
      </h1>
      <h2 className="text-xl md:text-xl mt-3 mb-12 text-gray-900 dark:text-gray-200 font-medium leading-7">
        I am a (junior) frontend developer from Germany with an eye for design
        and aesthetics. I love motorsports and I used to play drums in a metal
        band.
      </h2>
      <div className="socials flex gap-4 text-gray-600 dark:text-gray-200">
        <Link
          to="https://www.github.com/marcelbialas"
          className="hover:text-emerald-500 transition-all duration-200"
        >
          <Github size="28" />
        </Link>
        <Link to="https://www.instagram.com/marcelbialas">
          <Instagram
            size="28"
            className="hover:text-emerald-500 transition-all duration-200"
          />
        </Link>
        <Link to="https://www.linkedin.com/in/marcel-bialas-a4374a28b/">
          <Linkedin
            size="28"
            className="hover:text-emerald-500 transition-all duration-200"
          />
        </Link>
        <Link to="mailto:marcel@mbialas.de">
          <span title="Send me a E-Mail">
            <AtSign
              size="28"
              className="hover:text-emerald-500 transition-all duration-200"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
