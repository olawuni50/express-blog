import type { NextPage } from 'next'
import Layout from '../components/Layout'
import axios from 'axios'
import { Post } from '../types'
import Head from 'next/head'
import BlogCard from '../components/BlogCard'
import { BASE_URL } from '../utils'


interface IProps {
  posts: Post[]
}

const Home: NextPage<IProps> = ({ posts }) => {
  console.log(posts)


  return (
    <div>
    <Head>
      <title>Express Blog</title>
      <link rel="icon" href="https://pixabay.com/tr/vectors/telefon-aramak-sembol-buton-simge-304968/" />
    </Head>
    
    <div>
      {posts.length ? posts?.map((post: Post) => (
        <BlogCard myPost={post} key={post._id} />
      )): "No Posts"}
    </div>

    <footer className="border-r-3 border-gray-100 my-3">
      This is the footer
    </footer>
    </div>

  )
}

export const getServerSideProps = async () => {

  const {data}= await axios.get(`${BASE_URL}/api/post`)

  return {
    props:{
      posts: data
    }
  }
}
export default Home
