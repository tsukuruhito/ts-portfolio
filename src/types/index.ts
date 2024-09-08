import type { MicroCMSImage } from 'microcms-js-sdk';

export type portfolioType = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    description: string;
    stack: string;
    link: string;
    image: MicroCMSImage;
    practice: boolean;
};
