
import Link from 'next/link';
import { microcms } from '@/lib';
import type { portfolioType } from '@/types';
import Image from 'next/image';

async function getList(){
    const { contents }: { contents: portfolioType[] } = await microcms.get({
        endpoint: 'portfolio',
        queries: { fields: ['id', 'image'], limit: 3 },
    });

    return contents;
}

export default async function Page(){
    const contents = await getList();
    return (
        <ul className="grid md:grid-cols-3 gap-8 drop-shadow-sm">
            {contents.map((content) => (
                <li key={content.id}>
                    <Link href={`/portfolio/${content.id}`} scroll={false} prefetch>
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
    )
}