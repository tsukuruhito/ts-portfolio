import Kv from '@/components/Kv';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const KV = dynamic(() => import('@/components/Kv'), { ssr: false });
export const metadata: Metadata = {
    title: 'Ts Port',
    description:
        'This is my portfoio site to description my skills and show products',
};
const Home = () => {
    return (
        <div>
            <div className="">
                <KV />
            </div>
        </div>
    );
};

export default Home;
