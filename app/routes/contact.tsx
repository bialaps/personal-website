import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
interface Errors {
  email?: string;
  name?: string;
  message?: string;
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("called");

  const formData = await request.formData();

  const email = String(formData.get("user_email"));
  const name = String(formData.get("user_name"));
  const message = String(formData.get("message"));

  const errors: Errors = {};

  if (!email) {
    errors.email = "Email is required";
  } else if (!email.includes("@")) {
    errors.email = "Invalid email adress";
  }
  if (!name) {
    errors.name = "Please provide a Name";
  }
  if (message.length <= 0) {
    errors.message = "Please provide a Message";
  }

  return {
    errors: Object.keys(errors).length ? errors : null,
  };
}

export default function Contact() {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-emerald-500 pt-6 pb-8">
        Send me a message
      </h2>
      <Form
        method="post"
        name="myForm"
        className="flex flex-col gap-4 font-medium text-lg"
      >
        <div>
          {actionData?.errors?.name ? (
            <small className="text-red-500">{actionData?.errors.name}</small>
          ) : null}
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            className="pb-3 block w-full rounded-2xl bg-gray-100 dark:bg-gray-900 border-transparent focus:border-gray-500 dark:focus:border-gray-800 dark:placeholder:text-zinc-500 focus:bg-white focus:ring-0"
          />
        </div>
        <div>
          {actionData?.errors?.email ? (
            <small className="text-red-500">{actionData?.errors.email}</small>
          ) : null}

          <input
            type="email"
            placeholder="Your E-Mail Adress"
            name="user_email"
            className="py-3 block w-full rounded-2xl bg-gray-100 dark:bg-gray-900 border-transparent focus:border-gray-500 dark:focus:border-gray-800 dark:placeholder:text-zinc-500 focus:bg-white focus:ring-0"
          />
        </div>
        <textarea
          className="py-3 block w-full rounded-2xl bg-gray-100 dark:bg-gray-900 border-transparent focus:border-gray-500 dark:focus:border-gray-800 dark:placeholder:text-zinc-500 focus:bg-white focus:ring-0"
          rows={6}
          placeholder="Your Message"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="md:ml-auto md:w-1/4 bg-gray-200 text-gray-900 rounded-2xl py-2 px-4 font-bold gap-3 md:mb-6 mb-16 hover:bg-emerald-500 transition-all duration-300 cursor-pointer"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
