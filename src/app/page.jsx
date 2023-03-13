import Movies from '@/components/Movies';

import React from 'react'

const page = async ({ searchParams }) => {
    console.log(searchParams.genre, "searchParams");

    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending /all/day"}?api_key=a6842257f68b9df43ced849e554893ad&language=en-US&page=1`,
        { next: { revalidate: 1000 } })

    const data = await res.json()
    console.log("data", data);
    return (
        <div className='flex items-center flex-wrap gap-4 justify-center'>
            {
                data?.results?.map((dt, index) => (
                    <Movies dt={dt} key={index} />
                ))
            }
        </div>
    )
}

export default page