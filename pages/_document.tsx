import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta
          name="description"
          content="This is my portfoio site to description my skills and show products"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content="https://ts-createport.site/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="ts port"/>
        <meta property="og:description" content="This is my portfoio site to description my skills and show products"/>
        <meta property="og:image" content="https://ts-createport.site/ogp.jpg"/>
        <meta property="og:site_name" content="ts port"/>
        <meta property="og:locale" content="ja_JP"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@ts_create_"/>
        <meta name="twitter:creator" content="@ts_create_"/>
        <meta name="twitter:title" content="ts port"/>
        <meta name="twitter:description" content="This is my portfoio site to description my skills and show products"/>
        <meta name="twitter:image" content="https://ts-createport.site/ogp.jpg"/>
        <meta name="twitter:url" content="https://ts-createport.site/"/>
        <script
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
