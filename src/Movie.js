import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({CoverImage, title, genres, id}){
    return(
        <div>
            <img src={CoverImage} alt={title}/>
            <h3>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
            <ul>
            {genres.map((z)=>(
                <li key={z}>{z}</li>
            ))}
            </ul>
        </div>
    );
}
Movie.propTypes = {
    CoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
}


export default Movie;