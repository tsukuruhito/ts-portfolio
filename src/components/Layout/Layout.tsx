import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";
import SceneChange from "../SceneChange";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  title: string;
  isHeader: boolean;
  isFooter: boolean;
  inView: boolean;
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({
  title,
  isHeader,
  isFooter,
  inView,
  children,
}) => {
  return (
    <div
      className="bg-base-200 dark:bg-zinc-500
    "
    >
      <Head>
        <title>{title}</title>
      </Head>
      <SceneChange />
      {isHeader && <Header inView={inView} />}
      {children}
      {isFooter && <Footer />}
    </div>
  );
};

export default Layout;
