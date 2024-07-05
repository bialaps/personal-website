import React, { useRef } from "react";
import { sendForm } from "@emailjs/browser";

import { Form } from "@remix-run/react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    /* TODO: Form Validation, Captcha, Error & Success Handling */
    e.preventDefault();

    if (form.current) {
      sendForm(window.ENV.SERVICE_ID, "contact_form", form.current, {
        publicKey: "VQL-d-_CsqiW-m8Ij",
      }).then(
        () => {
          console.log("SUCCESS!");
          form.current && form.current.reset();
        },
        (error: { text: string }) => {
          console.log("FAILED...", error.text);
        }
      );
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-emerald-500 pt-6 pb-8">
        Contact me :)
      </h2>
      <Form
        ref={form}
        onSubmit={submitHandler}
        className="flex flex-col gap-4 font-medium text-lg"
      >
        <input
          type="text"
          placeholder="Your Name"
          name="user_name"
          className="py-3  block w-full rounded-2xl bg-gray-100 dark:bg-gray-900 border-transparent focus:border-gray-500 dark:focus:border-gray-800 dark:placeholder:text-zinc-500 focus:bg-white focus:ring-0"
        />
        <input
          type="email"
          placeholder="Your E-Mail Adress"
          name="user_email"
          className="py-3  block w-full rounded-2xl bg-gray-100 dark:bg-gray-900 border-transparent focus:border-gray-500 dark:focus:border-gray-800 dark:placeholder:text-zinc-500 focus:bg-white focus:ring-0"
        />
        <textarea
          className="py-3 block w-full rounded-2xl bg-gray-100 dark:bg-gray-900 border-transparent focus:border-gray-500 dark:focus:border-gray-800 dark:placeholder:text-zinc-500 focus:bg-white focus:ring-0"
          rows={10}
          placeholder="Your Message"
          name="message"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className="md:ml-auto md:w-1/4 bg-gray-200 text-gray-900 rounded-2xl py-3 px-6 font-bold md:text-md gap-3 md:mb-6 mb-16 hover:bg-emerald-500 transition-all duration-300 cursor-pointer"
        />
      </Form>
    </div>
  );
}
