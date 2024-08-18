import '@/styles/globals.css';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes'

type Props = {
    title: string;
    isHeader: boolean;
    isFooter: boolean;
    isMenu: boolean;
    children: Readonly<ReactNode>;
};

export default function RootLayout({
    children,
}: Props) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute='class' defaultTheme='ecosystem' enableSystem>
                    <Header isMenu={true}/>
                    <main>
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
