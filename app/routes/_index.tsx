import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { Linkedin, Instagram, Github, AtSign } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Marcel Bialas" },
    {
      name: "description",
      content:
        "I am a front-end developer from Germany with a passion for design and aesthetics",
    },
  ];
};

export default function Index() {
  return (
    <div className="p-4 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">Hello, I am Marcel!</h1>
      <h2 className="text-xl my-6 text-gray-600">
        I am a front-end developer from Germany with a passion for design and
        aesthetics. I&apos;m a motorsport fanatic who used to play drums in a
        metal band.
      </h2>
      <div className="socials flex gap-4 text-gray-600">
        <Link to="https://www.github.com/marcelbialas">
          <Github size="30" />
        </Link>
        <Link to="https://www.instagram.com/marcelbialas">
          <Instagram size="30" />
        </Link>
        <Link to="https://www.linkedin.com/in/marcel-bialas-a4374a28b/">
          <Linkedin size="30" />
        </Link>
        <Link to="mailto:marcel@mbialas.de">
          <span title="Send me a E-Mail">
            <AtSign size="30" />
          </span>
        </Link>
      </div>
    </div>
  );
}
