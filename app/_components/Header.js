import HeaderNav from "./HeaderNav";
import TopNav from "./TopNav";
import UserDetails from "./UserDetails";
import { auth } from "../_lib/auth";

export default async function Header() {
  const session = await auth();

  return (
    <header className="bg-white divide-y-2 divide-gray-100">
      <div className="container mx-auto">
        <HeaderNav session={session} />
      </div>
      <nav className="text-stone-700">
        <div className="container mx-auto">
          <TopNav />
        </div>
      </nav>
    </header>
  );
}
