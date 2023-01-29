import Head from "next/head";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode } from "react";
import SceneChange from "../SceneChange";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  title: string;
  isHeader: boolean;
  isFooter: boolean;
  isMenu: boolean;
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({
  title,
  isHeader,
  isFooter,
  isMenu,
  children,
}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.pathname === "/" ? title : `${title} | Ts Port`}</title>
      </Head>
      <div className="bg-white dark:bg-zinc-600 min-h-screen">
        {isHeader && <Header isMenu={isMenu} />}
        <SceneChange>
          {children}
          {isFooter && <Footer />}
        </SceneChange>
      </div>
    </>
  );
};

export default Layout;
