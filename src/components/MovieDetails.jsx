import React from 'react'
import { useParams } from 'react-router-dom';

const MovieDetails = ({movies} ) => {
    const params = useParams ();
    const clickMovie = movies.find((el) => el.id === Number(params.id));
  return (
    <div>
         
        <div className='details'>
        <img className="img-movie" src={clickMovie.imgUrl} alt="Movie img" />
        <div className="bloc-right">
        <h1>{clickMovie.name}</h1>
        <h6>{clickMovie.rating}</h6>
        
       
        <p> {clickMovie.descip} </p>
    </div>
    </div>
    </div>
  )
}

export default MovieDetails