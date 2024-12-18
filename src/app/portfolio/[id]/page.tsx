import { microcms } from '@/lib';
import type { portfolioType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type PortfolioProps = {
    params: {
        title: string;
    };
};
export async function generateMetadata({ params }: PortfolioProps) {
    const { contents }: { contents: portfolioType[] } = await microcms.get({
        endpoint: 'portfolio',
        contentId: params.title,
    });
    const content = contents[0];
    return {
        title: `TS Port | ${content.title}`,
        description: content.description,
    };
}

const Portfolio = async ({ params }: PortfolioProps) => {
    const { contents }: { contents: portfolioType[] } = await microcms.get({
        endpoint: 'portfolio',
        contentId: params.title,
        queries: {
            fields: [
                'id',
                'title',
                'image',
                'description',
                'period',
                'stack',
                'link',
                'practice',
            ],
        },
    });

    const content = contents[0];
    return (
        <div className="pt-32 min-h-svh">
            <p className="px-4 w-full max-w-screen-xl mx-auto mb-10">
                <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 border py-0.5 px-2 rounded-md "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                    >
                        <title>Back to</title>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                    </svg>
                    <span className="pt-1">Portfolio</span>
                </Link>
            </p>
            <div className="h-section">
                <h2>{content.title}</h2>
            </div>
            <div className="px-4 max-w-screen-xl mx-auto mt-4">
                <div className="grid place-items-center md:grid-cols-[minmax(auto,_40%)_minmax(auto,_1fr)] gap-8">
                    <figure className="rounded-md border-[0.15rem] self-center">
                        <Image
                            src={content.image.url}
                            width={480}
                            height={270}
                            alt={content.title}
                        />
                    </figure>
                    <div>
                        <p className="inline-block text-sm tracking-wider leading-none bg-gray-500/60 text-white py-1 px-2 rounded-full shadow-sm shadow-gray-500">
                            {content.practice ? 'Practice' : 'Work'}
                        </p>
                        <dl className="grid grid-cols-[auto,_1fr] gap-y-2 gap-x-4 mt-2">
                            <dt className="text-sm">概要</dt>
                            <dd>
                                <p>{content.description}</p>
                            </dd>
                            <dt className="text-sm self-center">制作期間</dt>
                            <dt>{content.period}</dt>
                            <dt className="text-sm self-center">Stack</dt>
                            <dd>
                                <ul className="flex flex-wrap gap-2">
                                    {content.stack.split(',').map((stack) => (
                                        <li
                                            className="text-sm inline-block leading-none pt-1.5 py-1 px-1 border rounded-sm"
                                            key={stack}
                                        >
                                            {stack}
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                        {content.link && (
                            <p className="mt-6 tracking-widest">
                                <a
                                    href={content.link}
                                    className="inline-grid grid-cols-[1fr_auto] items-center gap-1 text-center w-full px-2 py-2 bg-[#3c3c3c]/50 dark:bg-white/80 text-white dark:text-[#3c3c3c] rounded-full"
                                >
                                    <span className="text-xl leading-none pt-1">
                                        Link
                                    </span>
                                    <span className="inline-flex items-center rounded-full p-1 dark:text-white text-[#3c3c3c] dark:bg-[#3c3c3c]/80 bg-white/80">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <title>View on External Site</title>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
