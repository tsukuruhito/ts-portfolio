import Kv from '@/components/Kv';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Ts Port',
    description:
        'This is my portfoio site to description my skills and show products',
};
const Home= () => {
    return (
        <div>
            <div className="">
                <Suspense fallback={null}>
                    <Kv/>
                </Suspense>
            </div>
        </div>
    );
};

export default Home;
