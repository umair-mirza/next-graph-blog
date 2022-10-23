import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import Categories from '../components/Categories'

const posts = [
  {title: 'React new version tutorial', excerpt: 'Learn Reeact with the latest tutorial'},
  {title: 'NextJS tutorial hands-on', excerpt: 'Learn NextJS with this new hands-on tutorial'}
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Next Futuristic Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {
            posts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))
          }
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
        
      </div>

    </div>
  )
}
