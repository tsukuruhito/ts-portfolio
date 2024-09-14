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
        queries: { ids: params.id },
    });
    const content = contents[0];
    return (
        <Modal>
            <div className="grid grid-flow-col">
                <div>
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                    <p>{content.stack}</p>
                    <a href={content.link}>Link</a>
                </div>
                <Image
                    src={content.image.url}
                    width={480}
                    height={270}
                    alt={content.title}
                />
            </div>
        </Modal>
    );
};

export default Portfolio;
