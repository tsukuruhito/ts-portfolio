import Link from "next/link"
import Layout from "../src/components/Layout/Layout"

const works = () => {
    return(
        <Layout title="works" isHeader={true} isFooter={true}>
            <Link href={"https://stream-clock.vercel.app/"}><a>Stream Clock</a></Link>
            
        </Layout>
    )
}
export default works