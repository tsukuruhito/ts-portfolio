import Modal from '@/components/Modal';
import { microcms } from '@/lib';
import type { portfolioType } from '@/types';
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
    return (
        <Modal>
            <div>
                <p>portfolio</p>
            </div>
        </Modal>
    );
};

export default Portfolio;
