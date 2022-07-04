import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../src/components/Layout/Layout'
import Skills from '../src/components/Skills'

const Home: NextPage = () => {
  return (
    <Layout title="Ts Portfolio" isHeader={true} isFooter={true}>
      <div className='bg-gradient-to-b from-[#305071] via-cyan-700 to-[#f3beb6] dark:from-[#0f111c] dark:via-[#233367] dark:to-[#2b476d] text-zinc-50 dark:text-zinc-300'>
        <div className="hero lg:min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='relative w-full h-60 lg:h-screen'>
              <Image src="/top_photo-2.webp" alt="" layout='fill' objectFit='cover' objectPosition="center" className='max-w-sm rounded-lg shadow-2xl' priority/>
            </div>
            <div className='font-mono tracking-tight '>
              <h1 className="text-5xl font-bold">Frontend and Design</h1>
              <div className="py-6">
                <p>This is my portofolio page. I&apos;m beginner but I have high motivation to study and create. So I&apos;ll continue to update my skills and portofolio.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex flex-row-reverse px-4 py-16 max-w-3xl mx-auto box-border'>
              <div className='relative w-full h-60'>
                <Image src="/scene03.webp" alt="" layout='fill' objectFit='cover' objectPosition="center" className='max-w-sm rounded-lg shadow-2xl'/>
              </div>
              <div className='font-mono tracking-tight relative -mr-40 text-left mt-20 w-full font-semibold text-lg '>
                <h2 className="text-5xl font-bold whitespace-pre-wrap">About</h2>
                <dl className="py-6">
                  <dt className='text-2xl mb-2'>Tsukuruhito</dt>
                  <dd className='before:content-["job:"] before:uppercase'>Front-end enginieer/1.5years</dd>
                  <dd className='before:content-["like:"] before:uppercase'>frontend,design,photo</dd>
                </dl>
              </div>
          </div>
        </div>
        {/* <div>
          <div className='flex flex-row px-4 py-16 max-w-3xl mx-auto box-border'>
              <div className='relative w-full h-60'>
                <Image src="/scene02.webp" alt="" layout='fill' objectFit='cover' objectPosition="right" className='max-w-sm rounded-lg shadow-2xl' priority/>
              </div>
              <div className='font-mono tracking-tight relative -ml-40 text-right mt-10 font-semibold w-full text-lg '>
                <h2 className="text-5xl font-bold whitespace-pre-wrap">Works</h2>
                <div className="py-6">
                  <p>portfolio of work I have now is a little bit.</p>
                  <p>I plan to add more in the future, so please look forward to it!</p>
                  <Link href="/works"><a className='uppercase defaultLink py-2 mt-4 inline-block'>view page<Image src="/arrow.svg" alt="arrow" width={40} height={10} objectFit='contain' objectPosition='right'/></a></Link>
                </div>
              </div>
            </div>
        </div> */}
        <div>
          <div className='px-4 py-16 max-w-3xl mx-auto box-border'>
            <h2 className="text-5xl font-bold whitespace-pre-wrap">Skills</h2>
            <Skills/>
          </div>
        </div>

      </div>
      
    </Layout>
  )
}

export default Home
