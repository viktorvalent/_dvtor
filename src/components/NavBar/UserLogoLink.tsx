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
        className="text-gray-100 dark:hover:text-gray-200 hover:text-emerald-900 hover:bg-gray-700"
      >
        {name}
      </Link>
    </li>
  );
}
