import Head from 'next/head'
import Link from "next/link"
import Header from '../components/Header'
import { sanityClient, urlFor } from "../sanity"
import { Post } from "../typings"
import { SearchIcon } from '@heroicons/react/solid'
import { } from '@heroicons/react/outline'


interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>lukiluk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='flex flex-col sm:flex-row justify-around items-center rounded-lg bg-blue-200 border-black py-10 '>
        <div className="px-10 space-y-5">
          <h1 className="text-4xl text-amber-50 max-w-xl"> <span className='underline decoration-orange-400 decoration-4'>Learning</span>'s <span className='font-bold'>Pool</span> </h1>
          <h2 className='text-lg text-gray-400'>
            Javascript, Nextjs, typeScript
          </h2>
        </div>
        {/* Search Box */}
        <form className='flex items-center space-x-2 border border-gray-200 rounded-lg bg-gray-50 px-3 py-1 '>
          <SearchIcon className='h-6 w-6 text-gray-400' />
          <input className='flex-1 bg-transparent outline-none' type='text' placeholder='Search your treasure' />

          {/* button is hidden just to give the functionality to hit Enter end start the search without a visual button */}
          <button type='submit' hidden />

        </form>
      </div>

      {/* Posts */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map(post => (
          <Link key={post._id} href={`/post/${post.slug.current}`} >
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
                src={
                  urlFor(post.mainImage).url()!} alt="" />
              <div className='flex justify-between p-5 bg-white'>
                <div>
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p className='text-xs'>{post.description} by {post.author.name}</p>
                </div>

                <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query =
    `*[_type == "post"]{
    _id,
    title,
    author-> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

