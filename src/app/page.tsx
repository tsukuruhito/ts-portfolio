import Kv from '@/components/Kv';
import type { Metadata } from 'next';
import type { ListType } from '@/types';
import { microcms } from '@/lib';
import Link from 'next/link';
import Image from 'next/image';

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
                            <span className="block">『Life with Creative』</span>
                            <span>
                                ご縁で繋がった方々の大切なものを、もっと素敵なかたちでお届けする。そんなクリエイティブをしていきたい。
                                クリエイターとしてまだまだ未熟なわたしですが、この目的を忘れずにデザインやコーディングのスキルを磨き、日々精進しています。
                            </span>
                        </p>
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
                                <li key={content.id} className="relative w-fit ">
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
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
