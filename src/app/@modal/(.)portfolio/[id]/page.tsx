import Modal from '@/components/Modal';
import { microcms } from '@/lib';
import type { portfolioType } from '@/types';
import Image from 'next/image';
type PortfolioProps = {
    params: {
        id: string;
    };
};
const Portfolio = async ({ params }: PortfolioProps) => {
    const { contents }: { contents: portfolioType[] } = await microcms.get({
        endpoint: 'portfolio',
        queries: {
            ids: params.id,
            fields: [
                'id',
                'title',
                'image',
                'description',
                'period',
                'stack',
                'link',
            ],
        },
    });
    const content = contents[0];
    return (
        <Modal>
            <div className="grid md:grid-cols-[1fr_minmax(auto,_1fr)] gap-8">
                <figure className="rounded-md border-[0.15rem] self-center">
                    <Image
                        src={content.image.url}
                        width={480}
                        height={270}
                        alt={content.title}
                    />
                </figure>
                <div className="tracking-widest">
                    <h2 className="text-2xl font-bold pb-1 border-b-[0.15rem] border-dashed">
                        {content.title}
                    </h2>
                    <dl className="mt-2 grid grid-cols-[auto,_1fr] gap-y-2 gap-x-4">
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
                        <p className="mt-6">
                            <a
                                href={content.link}
                                className="grid grid-cols-[1fr_auto] items-center gap-1 text-center w-full px-2 py-2 bg-[#3c3c3c]/50 dark:bg-white/80 text-white dark:text-[#3c3c3c] rounded-full"
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
        </Modal>
    );
};

export default Portfolio;
