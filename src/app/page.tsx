import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Ts Port',
    description:
        'This is my portfoio site to description my skills and show products',
};
const Home= () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                <ul className="z-50 text-lg font-rodin uppercase text-right leading-8 tracking-widest">
                    <li>
                        <Link href="/works" className="top_link">
                            works
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className="top_link">
                            skills
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
