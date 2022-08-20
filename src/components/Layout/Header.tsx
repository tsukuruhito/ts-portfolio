import Link from "next/link";
import Image from "next/image";
import Theme from "../Theme";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { sceneAtom } from "../../atom";
import { useRouter } from "next/router";

type Props = {
  inView: boolean;
};
const Header = (props: Props) => {
  const { inView } = props;
  const [scene, setScene] = useAtom(sceneAtom);
  const router = useRouter();
  const handleChangePage = (path: string) => {
    setScene(true);
    if (router.pathname !== path) {
      router.push(path);
    }
  };
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
      <h1 className="cursor-pointer" onClick={() => handleChangePage("/")}>
        <a className="flex items-center">
          <Image
            src="/fav-w.png"
            alt="logo"
            width={100}
            height={50}
            objectFit="contain"
            objectPosition="center"
          />
          <span className="text-2xl font-semibold dark:text-white hidden md:block">
            ts port
          </span>
        </a>
      </h1>
      <ul className="text-lg flex items-center">
        <li className="cursor-pointer" onClick={() => handleChangePage("/")}>
          <a className="inline-block m-2 p-2 defaultLink dark:text-white">
            top
          </a>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => handleChangePage("/works")}
        >
          <a className="inline-block m-2 p-2 defaultLink dark:text-white">
            works
          </a>
        </li>
        <Theme />
      </ul>
    </motion.header>
  );
};

export default Header;
