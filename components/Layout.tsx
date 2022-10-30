import React from 'react'
import Head from 'next/head'

interface Props {
    title: string
    description?: any
}

const Layout = ({title}: Props) => {
    return(
        <Head>
            <title>{ title ? `${title} - Express` : 'Express Blog | The Best News Blog'}</title>
            
            </Head>

    )
}

export default Layout