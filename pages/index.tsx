import type { NextPage } from "next";
import Link from "next/link";
import Kv from "../src/components/Kv";
import Layout from "../src/components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Ts Port" isHeader={false} isFooter={true} isMenu={false}>
        <div className="relative overflow-hidden">
          <Kv />
          <ul className="absolute bottom-[30%] right-0 pr-4 md:right-[10%] text-white z-50 text-lg font-rodin uppercase text-right leading-8 tracking-widest">
            <li>
              <Link href="/works" className="top_link">works</Link>
            </li>
            <li>
              <Link href="/skills" className="top_link">skills</Link>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default Home;
