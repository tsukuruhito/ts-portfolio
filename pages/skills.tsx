import Layout from "../src/components/Layout/Layout";

const skills = () => {
    const front = ["HTML", "CSS", "SCSS", "CSS FW", "JavaScript", "React", "Next.js", "TypeScript", "Astro"];
    const backAndDB = ["PHP", "Node.js", "MySQL", "PostgreSQL", "Firebase"];
    const other = ["Git", "Apollo", "GraphQL", "WordPress", "Docker", "Webpack"];
    const design = ["XD", "Illustrator", "Photoshop", "After Effects", "Premiere Pro"];
  return (
    <Layout title="Skills" isHeader isMenu isFooter>
      <div className="lower_page">
        <div className="mb-8">
          <h2 className="h_section">skills</h2>
          <p className="text-xs border-[1px] dark:border-white border-stone-600 inline-block p-1 mb-2">
            更新日:<time dateTime="2023-01-30">2023/01/30</time>
          </p>
          <p>扱える言語やツールについてのページです。</p>
        </div>
        <section className="mb-12">
          <h3 className="h_section-sub">Technical</h3>
          <div className="mb-6">
            <h4>フロントエンド</h4>
            <div className="font-rodin text-sm">
                <p>Webページや簡単なWebアプリケーションをつくることができます。</p>
                <p>業務ではHTML、CSS、JavaScriptを用いてLP制作。趣味でReact/Next.jsやTypeSctiptを中心として制作を行っています。</p>
                <ul className="skill_box">
                    {front.map((item) => {
                        return <li className="skill_item" key={item}>{item}</li>;
                    })}
                </ul>
            </div>
          </div>
          <div className="mb-6">
            <h4>サーバーサイド・DB</h4>
            <div className="font-rodin text-sm">
                <p>現在、習得に向けて学習中ですが、いくつかの言語については多少の理解があります。</p>
                <ul className="skill_box">
                    {backAndDB.map((item) => {
                        return <li className="skill_item" key={item}>{item}</li>;
                    })}
                </ul>
            </div>
          </div>
            <h4>その他</h4>
            <div className="font-rodin text-sm">
                <p>使用経験のあるツールたちです。</p>
                <ul className="skill_box">
                    {other.map((item) => {
                        return <li className="skill_item" key={item}>{item}</li>;
                    })}
                </ul>
            </div>
        </section>
        <section className="mb-12">
          <h3 className="h_section-sub">Design</h3>
          <div className="font-rodin text-sm">
            <p>PhotoshopやIllustrator、XDで作られたカンプからの書き出しや、写真の軽微な加工などは業務でも行っているので可能です。</p>
            <p>デザインそのものについては、習得に向けて日夜励んでいます。</p>
            <ul className="skill_box">
                {design.map((item) => {
                    return <li className="skill_item" key={item}>{item}</li>;
                })}
            </ul>
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
