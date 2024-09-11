import '@/styles/globals.css';
import type { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

type Props = {
    title: string;
    isHeader: boolean;
    isFooter: boolean;
    isMenu: boolean;
    children: ReactNode;
    modal: ReactNode;
};

export const metadata: Metadata = {
    icons: [
        {
            url: '/favicons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        },
        {
            url: '/favicons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
        },
        {
            url: '/favicons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
        },
        {
            url: '/favicons/safari-pinned-tab.svg',
            color: '#5bbad5',
            rel: 'mask-icon',
        },
    ],
};

export default function RootLayout({ children, modal }: Props) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#2d89ef" />
                <meta name="theme-color" content="#ffffff" />
                <meta property="og:url" content="https://ts-createport.site/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ts port" />
                <meta
                    property="og:description"
                    content="This is my portfoio site to description my skills and show products"
                />
                <meta
                    property="og:image"
                    content="https://ts-createport.site/ogp.jpg"
                />
                <meta property="og:site_name" content="ts port" />
                <meta property="og:locale" content="ja_JP" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ts_create_" />
                <meta name="twitter:creator" content="@ts_create_" />
                <meta name="twitter:title" content="ts port" />
                <meta
                    name="twitter:description"
                    content="This is my portfoio site to description my skills and show products"
                />
                <meta
                    name="twitter:image"
                    content="https://ts-createport.site/ogp.jpg"
                />
                <meta
                    name="twitter:url"
                    content="https://ts-createport.site/"
                />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/kwf0rbn.css"
                />
            </head>
            <body className="bg-[#FAFAFA] dark:bg-[#3c3c3c]">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="ecosystem"
                    enableSystem
                >
                    <Header isMenu={true} />
                    <main className="pt-32 md:pt-24">
                        {children}
                        {modal}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
