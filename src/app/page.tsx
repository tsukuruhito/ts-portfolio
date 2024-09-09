import Kv from '@/components/Kv';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from './Loading';
import Page from './portfolio/page';

export const metadata: Metadata = {
    title: 'Ts Port',
    description:
        'This is my portfoio site to description my skills and show products',
};
const Home = () => {
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

                </div>
            </section>
        </>
    );
};

export default Home;
