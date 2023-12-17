import Link from "next/link";
import React from "react";

export default function UserLogoDropdown() {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-24"
      >
        <li>
          <Link href={"/"} className="hover:text-fuchsia-400">
            About
          </Link>
        </li>
        <li>
          <Link href={"/"} className="hover:text-fuchsia-400">
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}
