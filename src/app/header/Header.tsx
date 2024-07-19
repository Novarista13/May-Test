import HeaderForm from "./headerForm";
import HeaderRightItems from "./headerRightItems";

const Header = () => {
  return (
    <header className="flex h-24 items-center gap-4 border-b">
      <HeaderForm />
      <HeaderRightItems />
    </header>
  );
};

export default Header;
