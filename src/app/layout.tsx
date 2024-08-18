import '@/styles/globals.css';
import type { ReactNode } from 'react';
import SceneChange from '../components/SceneChange';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import type { Metadata } from 'next';

type Props = {
    title: string;
    isHeader: boolean;
    isFooter: boolean;
    isMenu: boolean;
    children: Readonly<ReactNode>;
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

export default function RootLayout({
    title,
    isHeader,
    isFooter,
    isMenu,
    children,
}: Props) {
    const year = new Date().getFullYear();
    return (
        <html lang="ja">
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
                <script
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(d) {
                            var config = {
                            kitId: 'wgv0eqk',
                            scriptTimeout: 3000,
                            async: true
                            },
                            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                        })(document);
                        `,
                    }}
                />
            </head>
            <body>
                <div className="bg-stone-600 min-h-screen">{children}</div>
            </body>
        </html>
    );
}
