"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface LinkProp {
  name?: string;
  href?: string;
  customClass?: string;
}

export default function NavLink({ name, href, customClass = "" }: LinkProp) {
  const [active, setActive] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   router.pathname === href ? setActive(true) : active;
  // }, []);

  return (
    <li>
      <Link
        href={href ?? "/"}
        className={
          "font-semibold rounded-full hover:text-fuchsia-400 " + customClass ??
          ""
        }
      >
        {name ?? "Link"}
      </Link>
    </li>
  );
}
