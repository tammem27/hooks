import { Link } from "react-router-dom"
import StarRating from './StarRating'

function Description({ movies , match }) {
    let movie =movies.find((el)=>el.name === match.params.name)
    
    return (
        <div >
            < div>
            <h1 style={{color:'white'}} >{movie.name}</h1>
            <h1 style={{color:'white'}} >{movie.date}</h1>
            <h1 style={{color:'white'}} >{movie.desc}</h1>
            
            </div>
             <button className="btn btn-primary" >
                 <Link to='/'>Return</Link></button>
        </div>
    )
}

export default Description 