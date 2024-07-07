import { Bug } from "lucide-react";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center pt-24 text-gray-900">
      <Bug size="48" className="" />
      <h2 className="text-2xl md:text-4xl font-bold pt-2">
        Something went wrong :/
      </h2>
      <h3 className="text-md md:text-lg font-medium pt-2 text-gray-500">
        We are already working on fixing it
      </h3>
    </div>
  );
}
