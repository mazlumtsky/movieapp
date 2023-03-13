
import React from 'react'
const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a6842257f68b9df43ced849e554893ad&language=en-US&page=1`)
    return await res.json()
}

const page = async ({ params }) => {
    const id = params.id;
    console.log(id, "id");

    const movieDetailds = await getMovie(id)
    console.log(movieDetailds, "movieDetailds");

    return (
        <div className='relative p-7 min-h-screen '>
            <img fill style={{ objectFit: "cover" }} className="rounded-lg flex justify-center" src={`https://image.tmdb.org/t/p/original/${movieDetailds?.backdrop_path || movieDetailds?.poster_path}`} alt="ddd" />
            <div className='absolute top-10  p-2 rounded-md my-3 mx-6'>
                <div className='text-4xl font-semibold my-3'>{movieDetailds?.title}</div>
                <div className='w-1/2 font-semibold my-3'>{movieDetailds?.overview}</div>
                <div>{movieDetailds?.release_date} - {movieDetailds?.vote_average}</div>
                <div className='border w-32 p-3 text-center rounded-xl my-3 cursor-pointer text-lg hover:bg-white hover:text-black'>İzle</div>

            </div>
        </div>
    )
}

export default page