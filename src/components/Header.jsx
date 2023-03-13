"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi"
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'
function Header() {
    const [keyword, setkeyword] = useState("")
    const router = useRouter()
    const menu = [
        {
            menu: "Giriş",
            url: "./about"
        },
        {
            menu: "Kayıt ol",
            url: "./login"
        },
    ]
    const serachFunc = (e) => {
        if (e.key === "Enter" && keyword.length >= 3) {
            router.push(`/search/${keyword}`)
            setkeyword("")
        }
    }
    return (
        <div className='flex flex-1 items-center gap-3 p-5 h-20'>
            <div className='bg-orange-400 p-3 text-xl rounded-lg font-bold'>Movie App</div>
            <div className='flex flex-1 items-center gap-3 rounded-lg border border-neutral-400  p-3'>
                <input value={keyword} onKeyDown={serachFunc} onChange={e => setkeyword(e.target.value)} placeholder='Film veya Dizi ara...' className='outline-none flex-1 bg-transparent ' type="text" />
                <BiSearchAlt size={25} />
            </div>
            <ThemeComp />
            {menu.map((item, index) => (
                <MenuItem item={item} key={index} />
            ))}
        </div>
    )
}

export default Header