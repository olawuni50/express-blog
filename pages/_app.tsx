import React, {useState, useEffect} from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Widget from '../components/Widget'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";
import { GoogleOAuthProvider } from '@react-oauth/google';

const MyApp = ({ Component, pageProps}: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if(isSSR) return null;
  
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_ID}`}>
    <div className="w-full">
      <Navbar />
      </div>


      <div className="flex gap-6 md:gap-20">
        {/* <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto"> */}
        <div className="h-[92vh]">
          <Widget />
        </div>
      {/* </div> */}
  
  <div className="mt-4 flex flex-col gap-10 h-[88vh] image flex-1">
  <Component {...pageProps} />
  </div>
  </div>
  </GoogleOAuthProvider >
  )
}

export default MyApp

