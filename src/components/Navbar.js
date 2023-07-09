import Link from "next/link";
import { Menubar } from "./Menubar";

export const Navbar = () => {
    return(
        <>
            <nav className="flex items-center flex-wrap p-3 border-b-2 border-[#00548E] ">
            <Link href="/" className="inline-flex items-center p-2 mr-4 ml-5 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
                Company Logo
            </span>
            </Link>
            <Menubar />          
            </nav>
        </>
    )
}