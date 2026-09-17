import { FcGoogle } from "react-icons/fc";
import { signInAction } from "../_lib/actions";

export default function SigninButton() {
  return (
    <form action={signInAction}>
      <button className="button button-dark w-full gap-3">
        <FcGoogle className="h-6 w-6 mr-2" />
        Continue with Google
      </button>
    </form>
  );
}
