import Link from "next/link";

interface Props {
  name?: string;
  href?: string;
}

export default function UserLogoLink({ name, href = "/" }: Props) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-100 hover:text-fuchsia-400 hover:bg-slate-900"
      >
        {name}
      </Link>
    </li>
  );
}
