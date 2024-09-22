import { microcms } from '@/lib';
import type { portfolioType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = async () => {
    const { contents }: { contents: portfolioType[] } = await microcms.get({
        endpoint: 'portfolio',
        queries: { limit: 8 },
    });
    return (
        <div className="pt-32 min-h-svh">
            <div className="h-section">
                <h2 className="px-4 w-full max-w-screen-xl text-5xl tracking-wider font-semibold">
                    Portfolio
                </h2>
            </div>
            <ul className="mt-8 max-w-screen-xl mx-auto grid grid-cols-2 gap-x-4 gap-y-8 md:gap-12 w-fit px-4">
                {contents.map((content) => (
                    <li key={content.id} className="grid justify-center">
                        <Link
                            href={`/portfolio/${content.id}`}
                            className="relative drop-shadow-sm"
                        >
                            <Image
                                src={content.image.url}
                                width={480}
                                height={270}
                                alt={content.title}
                            />
                            <p className="text-sm tracking-wider leading-none absolute right-1 top-2 bg-gray-500/60 text-white py-1 px-2 rounded-full shadow-sm shadow-gray-500">
                                {content.practice ? 'Practice' : 'Work'}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;
