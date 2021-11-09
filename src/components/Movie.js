import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function Movie({CoverImage, title, genres, summary, id}){
    return(
        <div className={styles.movie}>
            <img src={CoverImage} alt={title} className={styles.movie__img}/>
            <h3 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
            <ul>
            {genres.map((z)=>(
                <li key={z} className={styles.movie__genres}>{z}</li>
            ))}
            </ul>
            <p>{summary.length > 121 ? 
            (
                <div>
                    `${summary.slice(0,121)}`
                    <Link to={`/movie/${id}`}>...</Link>
                </div>
            ) : summary }
            </p>
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