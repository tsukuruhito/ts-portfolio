import { microcms } from '@/lib';
import type { portfolioType } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ts Port | Portfolio',
    description:
        'This is my portfoio site to description my skills and show products',
};
type PortfolioProps = {
    params: {
        title: string;
    };
};
const Portfolio = async ({ params }: PortfolioProps) => {
    const { contents }: { contents: portfolioType[] } = await microcms.get({
        endpoint: 'portfolio',
        contentId: params.title,
    });
    console.log(params);
    return (
        <>
            <div>
                <p>portfolio</p>
            </div>
        </>
    );
};

export default Portfolio;
