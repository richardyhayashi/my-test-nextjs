'use client';

import { Link, usePathname } from "@/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
        <Link
            href='/'
            className={`link ${(pathname === '/') ? 'font-bold' : ''}`}
        >
            Home
        </Link>
        <Link
            href='/dashboard'
            className={`link ${(pathname === '/dashboard') ? 'font-bold' : ''}`}
        >
            Dashboard
        </Link>
        <Link
            href='/dashboard/settings'
            className={`link ${(pathname === '/dashboard/settings') ? 'font-bold' : ''}`}
        >
            Dashboard Settings
        </Link>
    </nav>
  )
}

export default Navbar;