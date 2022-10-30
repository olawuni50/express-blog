import React, {useState} from 'react'
import {BiMenuAltLeft} from 'react-icons/bi'
import {GiCancel} from 'react-icons/gi'
import Link from 'next/link'


const Widget = () =>{
    const [showMenu, setShowMenu] = useState(true)


    return(
        <div>
        <div className="xl:w-[210px] border-r-2 py-2 hidden xl:block border-[#061C56]-200 px-2">
            <div>
            <h1>Latest News</h1>                
            </div>
            <h1>Suggested Account</h1>
            </div>

            <div className="h-[160px] md:hidden block cursor-pointer"
            onClick={()=>setShowMenu((prev) => !prev)}>
                
                <div className="text-3xl p-2 border-r-2">
                {showMenu ? <BiMenuAltLeft /> : <GiCancel />}
                </div>

                <div className="border-r-2">
                {showMenu && (
                    <div className="flex flex-col font-bold justify-evenly w-[140px] p-3">

                        <Link href="/">
                    <span>Home</span>
                    </Link>

                <Link href="/">
                    <span>Politics</span>
                    </Link>

                <Link href="/">
                    <span>Education</span>
                    </Link>

                <Link href="/">
                    <span>Sport</span>
                    </Link>

                <Link href="/">
                    <span>Food</span>
                    </Link>
                    
                <Link href="/">
                    <span>Busines</span>
                    </Link>

                <Link href="/">
                    <span>Opinions</span>
                    </Link>

                    <Link href="/">
                    <span>Shop</span>
                    </Link>

                        </div>
                )}
                </div>
            </div>

            </div>
    )
}

// export const getServerSideProps = async ({ qu})

export default Widget 