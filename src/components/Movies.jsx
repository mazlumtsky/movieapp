"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function Movies({ dt }) {
    console.log(dt, "dt")
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/movie/${dt?.id}`)} className='w-[300px] h-[200px] relative rounded-lg transition-opacity hover:shadow-lg hover:border-orange-500 cursor-pointer  order-2'>
            <img fill className='w-full h-full rounded-md ' src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} alt="ddd" />
            <div className='absolute bottom-0 p-3 w-full h-full transition-all flex flex-col  justify-end opacity-0 hover:opacity-100 text-white  '>
                <div className='text-xl font-semibold shadow-2xl'> {dt.title}</div>
                <div>{dt?.release_date} - {dt?.vote_average}</div>
            </div>
        </div>
    )
}

export default Movies