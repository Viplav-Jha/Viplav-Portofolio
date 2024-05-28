import Link from "next/link";

export default function Footer(){
    return <footer>
        <nav className="max-w-3xl mx-auto gap-3 p3">
         <Link href='/privacy'>Privacy </Link>
        </nav>
    </footer>
}