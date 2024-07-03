import Link from "next/link";

export default function Header({ title, linkTitle, linkHref }) {
  return (
    <div className="flex justify-between items-center p-2">
      <h1 className="font-bold text-xs sm:text-sm xl:text-lg">{title}</h1>
      {linkTitle && linkHref ? (
        <Link
          href={linkHref}
          className="text-xs sm:text-sm xl:text-lg underline"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
