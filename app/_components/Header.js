import HeaderNav from "./HeaderNav";
import TopNav from "./TopNav";

export default function Header() {
  return (
    <header className="bg-white divide-y-2 divide-gray-100">
      <div className="container mx-auto">
        <HeaderNav />
      </div>
      <nav className="text-stone-700">
        <div className="container mx-auto">
          <TopNav />
        </div>
      </nav>
    </header>
  );
}
