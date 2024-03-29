import { Suspense } from "react";
import Card from "../src/components/Card";
import Layout from "../src/components/Layout/Layout";
import Loading from "../src/components/Loading";
import json from "../src/link.json";

const Works = () => {
  return (
    <Layout title="Works" isHeader={true} isFooter={true} isMenu={true}>
      <section className="lower_page">
        <div className="mb-8">
          <h2 className="h_section">works</h2>
          <p>公開中のサービスや習作を掲載しています。</p>
          <p>多くのものはReact/Next.jsで作っています。</p>
        </div>
        <section className="mb-8">
          <h3 className="h_section-sub">
            web page &amp;&nbsp;
            <span className="inline-block">web application</span>
          </h3>
          <Suspense fallback={<Loading />}>
            <Card ary={json.tech} />
          </Suspense>
        </section>
        <section className="mb-8">
          <h3 className="h_section-sub">design &amp; motion</h3>
          <Suspense fallback={<Loading />}>
            <Card ary={json.design} />
          </Suspense>
        </section>
      </section>
    </Layout>
  );
};
export default Works;
