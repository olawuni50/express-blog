import React from "react"
import { Post } from "../types"
import { NextPage } from 'next';
import PortableText from 'react-portable-text'

interface IProps {
    myPost: Post
}

const BlogCard: NextPage<IProps>= ({myPost}) =>{
    return(
        <>
            <div>
            {myPost.topic}
            </div>

            <div>
            {myPost.category}
            </div>

            Published at {new Date(myPost.publishedAt).toLocaleString()}


            <PortableText   content={myPost.body} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
              serializers={{
                h1: (props: any) => (
                  <h1 className="my-5 text-2xl font-bold" {...props}></h1>
                ),
                h2: (props: any) => (
                  <h1 className="my-5 text-xl font-bold" {...props}></h1>
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ children, href }: any) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
            {myPost.pimage}
            {myPost.postedBy.userName}
        
        </>

    )
}

export default BlogCard