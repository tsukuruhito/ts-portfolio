import Kv from '@/components/Kv';
import type { Metadata } from 'next';
// import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { microcms } from '@/lib';
import type { portfolioType } from '@/types';

// const KV = dynamic(() => import('@/components/Kv'), { ssr: false });
export const metadata: Metadata = {
    title: 'Ts Port',
    description:
        'This is my portfoio site to description my skills and show products',
};
const Home = async () => {
    const { contents }: { contents: portfolioType[] } = await microcms.get({
        endpoint: 'portfolio',
        queries: { fields: ['id', 'image'], limit: 3 },
    });
    return (
        <>
            <div>
                <Kv />
            </div>
            <section
                id="about"
                className="grid md:flex md:items-center gap-8 mt-24 mx-auto px-4 max-w-screen-xl box-border"
            >
                <Image
                    src="/images/about.jpg"
                    loading="eager"
                    alt=""
                    width={400}
                    height={255}
                    priority
                    className="rounded-lg grayscale md:max-w-[400px] md:w-[45vw] w-full h-auto"
                />
                <div>
                    <h2 className="text-2xl tracking-widest font-semibold">
                        About Me.
                    </h2>
                    <p className="text-base tracking-wide leading-8 mt-2">
                        『Life with Creative』
                        <span className="inline-block">
                            大切なものを、もっと素敵なかたちでお届けする。そんなクリエイティブをしていきたい。
                        </span>
                        <span className="inline-block">
                            そのために、デザインだけでなく、パフォーマンスにも心を配り、質の高い制作を目指していきます。
                        </span>
                    </p>
                </div>
            </section>
            <section id="work" className="mt-32">
                <div className="h-section">
                    <h2 className="px-4 w-full max-w-screen-xl text-2xl tracking-wider font-semibold">
                        Portfolio
                    </h2>
                </div>
                <div className="px-4 max-w-screen-xl mx-auto mt-8">
                    {/* <ul className="grid md:grid-cols-3 gap-8 drop-shadow-sm">
                        <li>
                            <Link href="/works">
                                <Image
                                    src="/images/works/upu.jpg"
                                    width={480}
                                    height={270}
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/works">
                                <Image
                                    src="/images/works/jamjam.jpg"
                                    width={480}
                                    height={270}
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/works">
                                <Image
                                    src="/images/works/framer.jpg"
                                    width={480}
                                    height={270}
                                    alt=""
                                />
                            </Link>
                        </li>
                    </ul> */}
                    <ul className="grid md:grid-cols-3 gap-8 drop-shadow-sm">
                        {contents.map((content) => (
                            <li key={content.id}>
                                <Link href={`/portfolio/${content.id}`}>
                                    <Image
                                        src={content.image.url}
                                        width={480}
                                        height={270}
                                        alt=""
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;
