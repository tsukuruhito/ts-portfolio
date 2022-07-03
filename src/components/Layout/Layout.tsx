import Head from 'next/head'
import { FunctionComponent, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
    title: string
    isHeader: boolean
    isFooter: boolean
    children: ReactNode
}

const Layout : FunctionComponent<Props> =({title, isHeader, isFooter, children})=> {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="This is my portfoio site to description my skills" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {isHeader && (<Header/>)}
            {children}
            {isFooter && (<Footer/>)}
        </>
    )
}

export default Layout