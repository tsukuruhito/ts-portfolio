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
        ${
          router.pathname !== "/"
            ? "bg-zinc-600/80 dark:border-gray-600 text-white"
            : "bg-transparent text-white"
        }
      `}
    >
      <motion.div
        initial={{ opacity: 0, pointerEvents: "none", filter: "blur(5px)" }}
        animate={{ opacity: 1, pointerEvents: "auto", filter: "blur(0px)" }}
        exit={{ opacity: 0, pointerEvents: "none", filter: "blur(5px)" }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex justify-between items-center flex-row"
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
      </motion.div>
    </header>
  );
};

export default Header;
