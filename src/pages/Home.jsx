import React from 'react'
import Heroslider from '../components/Heroslider'
import CategoryRow from '../components/CategoryRow'

const Home = () => {
  return (
    <div>
      <main>
        <Heroslider/>
        <div className='max-w-6xl mx-auto'>
            <CategoryRow title="Tranding Now" endpoint='trending/movie/week'/>
            <CategoryRow title="Top Rated"endpoint='movie/top_rated'/>
            <CategoryRow title="Action" endpoint='discover/movie?with_generes=28'/>
            <CategoryRow title="Comedy" endpoint='discover/movie?with_genres=35'/>
        </div>
      </main>
    </div>
  )
}

export default Home
