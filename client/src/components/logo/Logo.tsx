import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <span
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        <h1 className="font-extrabold text-2xl">Stock Control</h1>
      </span>
    </Link>
  );
};