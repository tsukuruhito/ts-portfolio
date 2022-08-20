import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Kv from "../src/components/Kv";
import Layout from "../src/components/Layout/Layout";
import Skills from "../src/components/Skills";

const Home: NextPage = () => {
  const { ref, inView } = useInView({
    initialInView: false,
    threshold: 0.1,
  });

  return (
    <>
      <Layout
        title="Ts Portfolio"
        isHeader={true}
        isFooter={true}
        inView={inView}
      >
        <div className="relative overflow-hidden">
          <Kv />
          <div ref={ref} className="py-8">
            <section
              className="
                    px-4 md:px-8 tracking-wide relative text-left max-w-5xl mx-auto box-border w-full font-semibold text-lg text-zinc-600 dark:text-white z-10
                  "
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: [0.6, 0.05, -0.01, 0.9] }}
                viewport={{ margin: "-150px", once: true }}
              >
                <h2 className="section_title before:content-['About']">
                  About
                </h2>
                <h3 className="text-2xl my-2 font-rodin">
                  つく
                  <span className="text-sm">
                    &#91;フロントエンドエンジニア&#93;
                  </span>
                </h3>
                <p className="font-rodin text-sm">
                  はじまったばかりのクリエイターとしての生活を日々丁寧にコツコツと過ごしています。
                </p>
                <div className="flex mx-auto items-center md:items-stretch justify-start flex-col md:flex-row my-8 gap-4 ">
                  <div className="metricsBox bg-zinc-400/30 before:border-zinc-400 before:-top-2 before:-left-2 ">
                    <dl>
                      <dt className="uppercase text-2xl mb-2 border-b-2 border-zinc-400 dark:border-white inline-block">
                        job
                      </dt>
                      <dd>フロントエンド/1.5Years</dd>
                      <dd className="my-2 text-sm">
                        <p>コーディング業務を中心に行っています。</p>
                        <p className="mt-2">
                          メインコーダーとして動きやギミックを中心に作っています。
                        </p>
                      </dd>
                    </dl>
                  </div>
                  <div className="metricsBox bg-stone-400/30 before:border-stone-400 before:-bottom-2 before:-right-2">
                    <dl>
                      <dt className="uppercase text-2xl mb-2 border-b-2 border-zinc-400 dark:border-white inline-block">
                        like
                      </dt>
                      <dd>
                        <ul className='after:content-["etc."]'>
                          <li className="inline-block mr-2">Web制作</li>
                          <li className="inline-block mr-2">デザイン</li>
                          <li className="inline-block mr-2">
                            モーショングラフィックス
                          </li>
                          <li className="inline-block mr-2">写真</li>
                        </ul>
                      </dd>
                      <dd className="my-2 text-sm">
                        <p>
                          クリエイティブなことへの関心が高く、日々勉強しています。
                        </p>
                        <p className="mt-2">
                          やりたいことが多すぎて手が回らないのが最近の悩み。
                        </p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </motion.div>
            </section>
            <section
              className="
                    px-4 md:px-8 tracking-wide text-right relative max-w-5xl mx-auto mt-24 w-full text-lg font-semibold text-zinc-600 dark:text-white
                    box-border
                  "
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: [0.6, 0.05, -0.01, 0.9] }}
                viewport={{ margin: "-150px", once: true }}
              >
                <h2 className="section_title before:content-['Works']">
                  Works
                </h2>
                <div className="my-8 ">
                  <Image
                    src="/works.jpg"
                    alt="works"
                    width={700}
                    height={500}
                    className="
                          w-4/5 h-1/3 md:h-auto md:w-auto sm:ml-auto mr-12 sm:mr-32
                          max-w-lg object-cover object-center
                        "
                  />
                  <div
                    className="
                          w-5/6 ml-auto md:w-auto text-sm
                          metricsBox bg-zinc-400/80 before:border-zinc-400 before:-top-2 before:-left-2
                          -mt-8
                        "
                  >
                    <p>これまで制作物を掲載しています。</p>
                    <p>これから随時作品を追加していきます。</p>
                    <Link href="/works">
                      <a className="uppercase defaultLink py-2 mt-2 inline-block relative">
                        view page
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </section>
            <section className="mt-24 px-4 md:px-8 tracking-wide relative text-left max-w-5xl mx-auto box-border w-full font-semibold text-lg text-zinc-600 dark:text-white z-10">
              <div>
                <div className="box-border">
                  <h2 className="section_title before:content-['Skills']">
                    Skills
                  </h2>
                  <Skills />
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
