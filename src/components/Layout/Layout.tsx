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
      <div className="bg-stone-200/80 dark:bg-stone-600 min-h-screen">
        <SceneChange>
          {isHeader && <Header isMenu={isMenu} />}
          {children}
          {isFooter && <Footer />}
        </SceneChange>
      </div>
    </>
  );
};

export default Layout;
