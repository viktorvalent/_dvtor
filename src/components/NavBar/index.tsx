import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import ThemeSwapper from "../ThemeSwapper";
import style from "./NavBar.module.css";
import UserLogoDropdown from "./UserLogoDropdown";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 justify-center">
      <div className="py-3 w-full max-w-6xl">
        <div className="flex-1">
          <Link
            href="/"
            className={
              style.logoTitle +
              " text-xl italic font-medium hover:text-fuchsia-600"
            }
          >
            {process.env.APP_NAME}
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <NavLink name="Home" />
            <NavLink name="Article" />
            <NavLink name="Project" />
            <div className="divider divider-horizontal"></div>
            <ThemeSwapper />
          </ul>
        </div>
        <UserLogoDropdown />
      </div>
    </div>
  );
}
