import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>lukiluk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='flex justify-between items-center bg-blue-300 border-black py-10 lg:py-0'>
        <div className="px-10 space-y-5">
          <h1 className="text-5xl max-w-xl font-serif"> <span className='underline decoration-orange-400 decoration-4'>Lukiluk</span> is a prototip blog using Sanity as Content imput</h1>
          <h2>
            It is a simple way to acces content and display varius posts in nextJs app...
          </h2>
        </div>
        <img className='hidden md:inline-flex h-32 lg:h-full'
          src="https://i.ibb.co/sv9zMQ6/Nice-Png-avocado-png-286518.png" alt="avocado" />
      </div>
      {/* Posts */}
    </div>
  )
}

export default Home
