import React from "react";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header>
      <div className="main-header">
        <div className="main-header__logo">
          <a href="https://lena-lis.github.io/rsschool-cv/" target="_blank">
            <Logo />
          </a>
        </div>
      </div>
    </header>
  );
}
