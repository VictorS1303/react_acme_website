'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

const Navbar = () =>
{

    const currentPath = usePathname()

    return (
        <nav className="bg-teal-800 flex justify-between items-center h-[70px] px-8 border-b-[3px] border-orange-500">
            <Link href='/'>
                <h1 className="text-xl logo text-white">
                    Acme <span className="text-orange-500">Website</span>
                </h1>
            </Link>
            <ul className="flex gap-10">
                <li className="text-lg">
                    <Link href={'/'} className={currentPath === '/' ? 'text-orange-500' : 'text-white duration-150 ease-in hover:text-orange-500'}>Home</Link>
                </li>
                <li className="text-lg">
                    <Link href={'/about'} className={currentPath === '/about' ? 'text-orange-500' : 'text-white duration-150 ease-in hover:text-orange-500'}>About</Link>
                </li>
                <li className="text-lg">
                    <Link href={'/offers'} className={currentPath === '/offers' ? 'text-orange-500' : 'text-white duration-150 ease-in hover:text-orange-500'}>Offers</Link>
                </li>
           </ul>
        </nav>
    );
}
 
export default Navbar