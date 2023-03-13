import React from 'react'
import Movies from '@/components/Movies';
const Page = async ({ params }) => {
  const keyword = params.keyword
  console.log(keyword, "keyword");

  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a6842257f68b9df43ced849e554893ad&query=${keyword}&language=en-US&include_adult=false`)
  const data = await res.json();
  console.log(data?.results, "data");
  return (
    <div>
      {
        !data?.results ?
          <div>böyle bir şey bulunamdı</div> :
          <div className='flex justify-center flex-wrap gap-4'>
            {
              data?.results?.map((dt, index) => (
                <div>
                  <Movies dt={dt} key={index} />
                </div>
              ))
            }
          </div>

      }
    </div>
  )
}

export default Page