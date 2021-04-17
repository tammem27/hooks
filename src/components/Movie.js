import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const Movie = ({film}) => {
    return (
        <div className="movie-card">
            <StarRating rate={film.rating} />
            <img src={film.image} alt={film.name}/>
            <h3>{film.name}</h3>
            <h3>{film.date} </h3>
            <h3>{film.desc}</h3>
            <button className="btn btn-primary">
                <Link to={`/Description/${film.name}`}>More informations</Link>

            </button>
        </div>
    )
}

export default Movie
