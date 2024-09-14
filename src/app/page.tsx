import Kv from '@/components/Kv';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import PortfolioList from '../components/PortfolioList';
// import Loading from './loading';
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
        queries: { fields: ['id', 'title', 'image'], limit: 3 },
    });

    return contents;
}
const Home = async () => {
    const contents = await fetchList();
    return (
        <>
            <Kv />
            <section
                id="about"
                className="mt-24 mx-auto px-4 max-w-screen-xl box-border"
            >
                <div>
                    <h2 className="text-4xl tracking-widest font-semibold">
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
                    <h2 className="px-4 w-full max-w-screen-xl text-4xl tracking-wider font-semibold">
                        Portfolio
                    </h2>
                </div>
                <div className="px-4 max-w-screen-xl mx-auto mt-8">
                    {/* <Suspense fallback={<Loading />}></Suspense> */}
                    <PortfolioList contents={contents} />
                </div>
            </section>
        </>
    );
};

export default Home;
