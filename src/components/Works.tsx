import { Suspense } from "react";
import Card from "./Card";
import Loading from "./Loading";
import json from "../../src/link.json";

const Works = () => {
  return (
    <section className="pt-16 px-4 md:px-8 relative max-w-7xl mx-auto text-zinc-600 font-rodin box-border">
      <div className="mb-8 relative z-10">
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
  );
};
export default Works;
