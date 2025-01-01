import HeaderNav from "./HeaderNav";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <header className="bg-white divide-y-2 divide-gray-100">
      <HeaderNav />
      <nav className=" text-stone-700">
        <TopNav />
      </nav>
    </header>
  );
};

export default Header;
