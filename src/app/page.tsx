import Kv from '@/components/Kv';
import type { Metadata } from 'next';
import PortfolioList from '../components/PortfolioList';
import type { ListType } from '@/types';
import { microcms } from '@/lib';

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
                        <PortfolioList contents={contents} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
