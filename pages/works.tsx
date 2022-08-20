import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { Suspense } from "react";
import { sceneAtom } from "../src/atom";
import Card from "../src/components/Card";
import Layout from "../src/components/Layout/Layout";
import Loading from "../src/components/Loading";
import Slider from "../src/components/Slider";
import json from "../src/link.json";

const Works = () => {
  const [scene] = useAtom(sceneAtom);
  return (
    <Layout
      title="Works | Ts Portfolio"
      isHeader={true}
      isFooter={true}
      inView={true}
    >
      <motion.div
        className="py-8"
        initial={{ opacity: 0 }}
        animate={!scene && { opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <section className="pt-16 px-4 md:px-8 relative max-w-5xl mx-auto text-zinc-600 dark:text-white font-rodin box-border">
          <div className="mb-8 relative z-10">
            <h2 className="mb-2 font-futura text-5xl font-bold tracking-wider text-stone-400 dark:text-white mx-2 relative z-20">
              Works
            </h2>
            <p className="text-base leading-6">
              公開中のサービスや習作を掲載しています。
            </p>
            <p className="text-base leading-6">
              多くのものはReact/Next.jsで作っています。
            </p>
          </div>
          <div className="mb-8">
            <h3 className="font-futura text-2xl font-bold tracking-wider text-stone-400 dark:text-white m-2">
              Web Page &amp;
              <span className="inline-block">Web Application</span>
            </h3>
            <Suspense fallback={<Loading />}>
              <Card ary={json.tech} />
            </Suspense>
          </div>
          <div className="mb-8">
            <h3 className="font-futura text-2xl font-bold tracking-wider text-stone-400 dark:text-white m-2">
              Design &amp; Motion
            </h3>
            <Suspense fallback={<Loading />}>
              <Card ary={json.design} />
            </Suspense>
          </div>
        </section>
        <section className="mt-24 px-4 md:px-8 relative max-w-5xl mx-auto text-zinc-600 dark:text-white font-rodin box-border">
          <div className="mb-8 relative z-10">
            <h2 className="mb-2 font-futura text-5xl font-bold tracking-wider text-stone-400 dark:text-white mx-2 relative z-20">
              Photo
            </h2>
            <p className="text-base leading-6">
              風景を撮ることも好きです。特に空が好きです。
            </p>
            <p className="text-base leading-6">
              撮影した写真からお気に入りのものをいくつか掲載します。
            </p>
          </div>
          <Slider />
        </section>
      </motion.div>
    </Layout>
  );
};
export default Works;
