import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { topics } from '../utils/constants'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createOrGetUser } from '../utils';
import useAuthStore from '../store/authStore';
import {IoMdAdd} from 'react-icons/io'
import {AiOutlineLogout } from 'react-icons/ai'

const Navbar = () => {
  const user = false 
  const {userProfile, addUser, removeUser} = useAuthStore()

    return(
        <div>
        <div className="w-full flex px-3 justify-between py-3 border-b-2">
            <Link href="/">
                <>
                <h2 className="font-bold hidden md:block text-2xl">Express Blog</h2>   
                {/* <h2 className="font-bold text-2xl md:hidden">EB</h2>          */}
                </>
            </Link>
            <h2>Search</h2>

            <div>
                {userProfile ? (
                    <div className="flex gap-3">

                        <Link href="/create">
                            <button className="rounded border-2 flex p-1 font-semibold gap-1 items-center">
                            <IoMdAdd className='text-2xl'/> {' '}
                            <span className="hidden md:block">Create Post</span>
                            </button>                          
                        </Link>

                        {userProfile.image && (
                            <Link href="/">
                                <>
                                <Image width={40} height={40} className="rounded-full cursor-pointer" 
                                src={userProfile.image} alt="profile phoeo"
                                />
                                </>
                            </Link>
                        )}

                            <button type="button" title="Logout" className="px-2" onClick={() => {googleLogout(); removeUser()}}>
                                <AiOutlineLogout color="red" fontSize={21} />
                                </button> 



                    </div>
                ): (
                    <GoogleLogin onSuccess={(response) => createOrGetUser(response, addUser)} 
                    onError={() => console.log("error")} />
                )}

                </div>
        </div>

        <div className="font-bold text-2xl md:hidden flex justify-center
        border-b-2 border-gray-200 py-2 font-Alegreya Sans"> Express Blog </div>

        <div className="w-full px-3 hidden md:flex font-bold py-2 justify-evenly border-b-2 
        cursor-pointer">
                
                <Link href="/" >
                    <span className="hover:bg-sky-200 rounded p-2">Home</span>
                    </Link>
                <Link href="/">
                    <span className="hover:bg-sky-200 rounded p-2">Politics</span>
                    </Link>
               
                <Link href="/">
                    <span className="hover:bg-sky-200 rounded p-2">Education</span>
                    </Link>

                <Link href="/">
                    <span className="hover:bg-sky-200 rounded p-2">Sport</span>
                    </Link>

                <Link href="/">
                    <span className="hover:bg-sky-200 rounded p-2">Food</span>
                    </Link>
                    
                <Link href="/">
                    <span className="hover:bg-sky-200 rounded p-2">Busines</span>
                    </Link>
                <Link href="/">
                    <span className="hover:bg-sky-200 rounded p-2">Opinions</span>
                    </Link>
                <Link href="/">
                    <span className="hover:bg-sky-200 rounded p-2">Shop</span>
                    </Link>
            </div>

    </div>
    )
}

export default Navbar