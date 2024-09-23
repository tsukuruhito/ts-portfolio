import Link from 'next/link';
import type { ListType } from '@/types';
import Image from 'next/image';

export default function PortfolioList({ contents }: { contents: ListType[] }) {
    return (
        <ul className="grid sm:flex sm:flex-wrap md:grid md:grid-cols-2 justify-center gap-8 drop-shadow-sm w-fit mx-auto">
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
    );
}
