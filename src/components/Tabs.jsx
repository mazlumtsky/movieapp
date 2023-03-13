"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from "next/navigation"
function Tabs() {
    const searchParams = useSearchParams()
    const genre = searchParams.get("genre")

    const tabs = [
        {
            name: "En Popüler",
            url: "popular"
        },
        {
            name: "En son",
            url: "top_rated"
        },
        {
            name: "Yakında Gelcekler",
            url: "upcoming"
        },
    ]
    return (
        <div className='p-5 my-3 bg-gray-200 dark:bg-neutral-900 flex items-center justify-center gap-8'>
            {
                tabs.map((item, index) => (
                    <Link key={index} className={`cursor-pointer font-semibold hover:opacity-70 ${item.url === genre ? "underline underline-offset-8 text-orange-400" : ""}`} href={`/?genre=${item.url}`}>{item.name}</Link>
                ))
            }
        </div>
    )
}

export default Tabs