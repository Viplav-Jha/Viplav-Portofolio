import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AIChatButton from "./AIButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="max-w-3xl m-auto flex flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link href="/">home</Link>
          {/* <Link href="/about">about me</Link> */}
          
        </nav>
        <div className="flex items-center gap-10">
          <AIChatButton />
          <ThemeToggle />
          <Link
            href="/resume"
            className="px-4 py-2 bg-blue-500 text-white rounded transition transform duration-300 ease-in-out hover:bg-blue-600 hover:scale-105"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
