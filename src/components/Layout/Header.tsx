import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import Theme from "../Theme";

const Header: FunctionComponent = () => {
  return (
    <header className="flex justify-between items-center font-mono py-2 uppercase flex-col md:flex-row bg-sky-900/80 dark:bg-sky-900">
      <h1>
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/fav.png"
              alt="logo"
              width={100}
              height={50}
              objectFit="contain"
              objectPosition="center"
            />
            <span className="text-2xl font-bold tracking-tight text-slate-200">
              ts portfolio
            </span>
          </a>
        </Link>
      </h1>
      <div className="text-lg flex items-center">
        <Link href="/works">
          <a className="inline-block m-2 p-2 defaultLink text-slate-200">
            Works
          </a>
        </Link>
        <Theme />
      </div>
    </header>
  );
};

export default Header;
