import Link from "next/link";
import Image from "next/image";
import Theme from "../Theme";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  isMenu: boolean;
};
const Header = (props: Props) => {
  const { isMenu } = props;
  const router = useRouter();
  return (
    <header
      className={`fixed top-0 w-full z-50 font-futura tracking-tight py-2 uppercase transition-all duration-500 ease-in-out
      flex justify-between items-center flex-row
        ${
          router.pathname !== "/"
            ? "bg-stone-600/80 dark:bg-stone-800/80 dark:border-gray-600 text-white"
            : "bg-transparent text-white"
        }
      `}
    >
        <h1 className="cursor-pointer">
          <Link href="/" className="flex items-center">
            <span className="w-[100px] h-[50px] relative">
              <Image
                src="/fav-w.png"
                alt="logo"
                fill
                className="object-contain"
                sizes="100px"
              />
            </span>
            <span className="text-2xl font-semibold dark:text-white hidden md:block">
              ts port
            </span>
          </Link>
        </h1>
        <ul className="text-sm md:text-lg flex items-center">
          {isMenu && (
            <>
              <li className="cursor-pointer">
                <Link
                  href="/"
                  className="inline-block mx-1 p-2 defaultLink dark:text-white"
                >
                  top
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="/works"
                  className="inline-block mx-1 p-2 defaultLink dark:text-white"
                >
                  works
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="/skills"
                  className="inline-block mx-1 p-2 defaultLink dark:text-white"
                >
                  skills
                </Link>
              </li>
            </>
          )}
          <li>
            <Theme />
          </li>
        </ul>
    </header>
  );
};

export default Header;
