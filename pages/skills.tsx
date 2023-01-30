import Layout from "../src/components/Layout/Layout";

const skills = () => {
  return (
    <Layout title="Skills" isHeader isMenu isFooter>
      <div className="lower_page">
        <div className="mb-8">
          <h2 className="h_section">skills</h2>
          <p className="text-xs border-2 dark:border-white border-stone-600 inline-block p-0.5 mb-2">
            更新日:<time dateTime="2023-01-30">2023/01/30</time>
          </p>
          <p>扱える言語やツールについてのページです。</p>
        </div>
        <section>
          <h3 className="h_section-sub">Technical</h3>
          <h4>フロントエンド</h4>
          <div className="font-rodin text-sm">
            <p>Webページや簡単なWebアプリケーションをつくることができます。</p>
            <p>業務ではHTML、CSS、JavaScriptを用いてLP制作。趣味でReact/Next.jsやTypeSctiptを中心として制作を行っています。</p>
          </div>
        </section>
        <section>
          <h3 className="h_section-sub">Design</h3>
          <div className="font-rodin text-sm">
            <p>習得に向けて日夜励んでいます。</p>
            <p>
              PhotoshopやIllustrator、XDで作られたカンプからの書き出しや、写真の軽微な加工などは日々の業務でも行っているので可能です。
            </p>
          </div>
        </section>
        <p className="text-xs mt-8">
          ※未記載の場合もあります。未記載の言語・ツールについてはDM等でお尋ねください。
        </p>
      </div>
    </Layout>
  );
};

export default skills;
