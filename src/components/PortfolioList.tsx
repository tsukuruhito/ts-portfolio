import Link from 'next/link';
import type { ListType } from '@/types';
import Image from 'next/image';

export default function PortfolioList({contents}:{contents: ListType[]}) {
    return (
        <ul className="grid md:grid-cols-3 gap-8 drop-shadow-sm">
            {contents.map((content) => (
                <li key={content.id}>
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
