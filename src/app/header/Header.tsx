import React from "react";
import HeaderRightItems from "./headerRightItems";
import HeaderForm from "./headerForm";

const Header = () => {
  return (
    <header className="flex h-24 items-center gap-4 border-b">
      <HeaderForm />
      <HeaderRightItems />
    </header>
  );
};

export default Header;
