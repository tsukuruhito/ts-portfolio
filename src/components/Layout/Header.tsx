import { FunctionComponent } from "react";
import Link from 'next/link'
import Image from "next/image";

const Header : FunctionComponent =()=> {
    return(    
        <header className="flex justify-between items-center font-mono py-2 uppercase flex-col md:flex-row">
            <h1><Link href="/">
                <a className="flex items-center">
                    <Image src="/fav.png" alt="logo" width={100} height={50} objectFit="contain" objectPosition="center"/>
                    <span className="text-2xl font-bold tracking-tight">ts portfolio</span>
                </a>
            </Link></h1>
            <div className="text-lg">
                <Link href="/"><a className="inline-block m-2 p-2 defaultLink">coming soon?</a></Link>
            </div>
        </header>
    )
}

export default Header