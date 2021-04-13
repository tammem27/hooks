import React from 'react'
import StarRating from './StarRating'

const Movie = ({film}) => {
    return (
        <div>
            <StarRating rate={film.rating} />
            <img src={film.image} alt={film.name}/>
            <h3>{film.name}</h3>
            <p>{film.date} </p>
        </div>
    )
}

export default Movie
