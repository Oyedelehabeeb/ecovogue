import { FcGoogle } from "react-icons/fc";
import { signInAction } from "../_lib/actions";

export default function SigninButton() {
  return (
    <form action={signInAction}>
      <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
        <FcGoogle className="h-6 w-6 mr-2" />
        Continue with Google
      </button>
    </form>
  );
}
