import Kv from '@/components/Kv';
import type { Metadata } from 'next';
import type { ListType } from '@/types';
import { microcms } from '@/lib';
import Link from 'next/link';
import Image from 'next/image';
import IconList from '@/components/IconList';
import Links from '@/components/Links';

export const metadata: Metadata = {
    title: 'Ts Port',
    description:
        'This is my portfoio site to description my skills and show products',
};
async function fetchList() {
    const { contents }: { contents: ListType[] } = await microcms.get({
        endpoint: 'portfolio',
        queries: { fields: ['id', 'title', 'image', 'practice'], limit: 4 },
    });
    return contents;
}
const Home = async () => {
    const contents = await fetchList();
    return (
        <>
            <Kv />
            <div className="relative z-10 mt-40">
                <section id="about">
                    <div className="h-section">
                        <h2>
                            About Me.
                            <span aria-hidden="true">About Me.</span>
                        </h2>
                    </div>
                    <div className="mx-auto px-4 max-w-screen-xl">
                        <p className="text-base tracking-wide leading-8 mt-2">
                            <span className="block">
                                『Life with Creative』
                            </span>
                            <span>
                                ご縁で繋がった方々の大切なものを、もっと素敵なかたちでお届けする。そんなクリエイティブをしていきたい。
                                クリエイターとしてまだまだ未熟なわたしですが、この目的を忘れずにデザインやコーディングのスキルを磨き、日々精進しています。
                                もし、わたしのスキルや経験がお役に立てることがあれば、お気軽にご相談ください。
                            </span>
                        </p>
                        <Links />
                    </div>
                </section>
                <section id="portfolio" className="mt-40">
                    <div className="h-section">
                        <h2>
                            Portfolio<span aria-hidden="true">Portfolio</span>
                        </h2>
                    </div>
                    <div className="px-4 max-w-screen-xl mx-auto mt-8">
                        <ul className="grid sm:flex sm:flex-wrap md:grid md:grid-cols-2 justify-center gap-8 drop-shadow-md w-fit mx-auto">
                            {contents.map((content) => (
                                <li
                                    key={content.id}
                                    className="relative w-fit "
                                >
                                    <p className="text-sm tracking-wider leading-none absolute right-1 top-2 bg-gray-500/60 text-white py-1 px-2 rounded-full shadow-sm shadow-gray-500">
                                        {content.practice ? 'Practice' : 'Work'}
                                    </p>
                                    <Link
                                        href={`/portfolio/${content.id}`}
                                        scroll={false}
                                        prefetch
                                    >
                                        <Image
                                            src={content.image.url}
                                            width={480}
                                            height={270}
                                            alt={content.title}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 text-center">
                            <Link
                                href="/portfolio"
                                className="text-xl tracking-widest border-b-[0.1em] border-gray-500"
                            >
                                View More
                            </Link>
                        </div>
                    </div>
                </section>
                <section id="skills" className="mt-40">
                    <div className="h-section">
                        <h2>
                            Skills<span aria-hidden="true">Skills</span>
                        </h2>
                    </div>
                    <div className="mx-auto max-w-screen-xl px-4 mt-8">
                        <div className="grid md:grid-cols-[auto,_30%] gap-4 items-center">
                            <div>
                                <h3 className="inline-block text-2xl tracking-widest border-b-[0.1em] px-2">
                                    <span className="text-[1.3em]">F</span>RONT
                                </h3>
                                <p className="mt-4">
                                    フロントエンド開発をメインで行っています。
                                </p>
                                <p className="mt-1">
                                    よく使用するものは、React、Next.js、Tailwind
                                    CSS、TypeScriptなどです。
                                </p>
                                <p className="mt-1">
                                    様々な環境に対応し、魅力的な表現をするために、積極的に新しいものを学んでいます。
                                </p>
                                <p className="mt-1">
                                    これからさらに、3D表現やアニメーションなどにも挑戦していきたいと考えています。
                                </p>
                            </div>
                            <IconList
                                type="front"
                                className="grid grid-cols-3 justify-self-center w-fit md:w-auto gap-6"
                            />
                        </div>
                        <div className="grid md:grid-cols-[auto,_30%] gap-4 items-center mt-12">
                            <div>
                                <h3 className="inline-block text-2xl tracking-widest border-b-[0.1em] px-2">
                                    <span className="text-[1.3em]">S</span>ERVER
                                    and <span className="text-[1.3em]">O</span>
                                    THER
                                </h3>
                                <p className="mt-4">
                                    サーバーサイド言語や開発にも積極的に取り組んでいます。
                                </p>
                                <p className="mt-1">
                                    Node.jsを使った業務ツール開発やHono.jsでのAPI構築などバックエンド技術の習得を進めています。
                                </p>
                            </div>
                            <IconList
                                type="other"
                                className="grid grid-cols-3 justify-self-center w-fit md:w-auto gap-6"
                            />
                        </div>
                        <div className="grid md:grid-cols-[auto,_30%] gap-4 items-center mt-12">
                            <div>
                                <h3 className="inline-block text-2xl tracking-widest border-b-[0.1em] px-2">
                                    <span className="text-[1.3em]">D</span>ESIGN
                                </h3>
                                <p className="mt-4">
                                    実務と学習を通じて、デザインスキルも積極的に磨いています。
                                </p>
                                <p className="mt-1">
                                    PhotoShopやIllustratorを使用しての素材の加工はもちろん、After
                                    Effectなどを使ったアニメーション制作も行っています。
                                </p>
                            </div>
                            <IconList
                                type="design"
                                className="grid grid-cols-3 justify-self-center w-fit md:w-auto gap-6"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
