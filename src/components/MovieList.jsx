import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies , search , del }) => {
  return (
    <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
        {movies.filter(el => el.name.toUpperCase().trim().includes(search.toUpperCase().trim())).map((el) => (
            <MovieCard el={el} key={el.id} del={del} />
        )
    )}
    </div>
  )
}

export default MovieList