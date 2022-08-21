import Link from "next/link";
import Image from "next/image";
import Theme from "../Theme";
import { motion } from "framer-motion";

type Props = {
  inView: boolean;
};
const Header = (props: Props) => {
  const { inView } = props;
  return (
    <motion.header
      className={`fixed w-full z-30 flex justify-between items-center font-futura tracking-tight py-2 uppercase flex-row transition-all duration-500 ease-in-out
        ${
          inView
            ? "bg-zinc-400/80 dark:border-gray-600 text-white"
            : "bg-transparent text-white"
        }
        `}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h1 className="cursor-pointer">
        <Link href="/" passHref>
          <a className="flex items-center">
            <span className="w-[100px] h-[50px] relative">
              <Image
                src="/fav-w.png"
                alt="logo"
                layout="fill"
                objectPosition="center"
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </span>
            <span className="text-2xl font-semibold dark:text-white hidden md:block">
              ts port
            </span>
          </a>
        </Link>
      </h1>
      <ul className="text-lg flex items-center">
        <li className="cursor-pointer">
          <Link href="/" passHref>
            <a className="inline-block m-2 p-2 defaultLink dark:text-white">
              top
            </a>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/works" passHref>
            <a className="inline-block m-2 p-2 defaultLink dark:text-white">
              works
            </a>
          </Link>
        </li>
        <li>
          <Theme />
        </li>
      </ul>
    </motion.header>
  );
};

export default Header;
