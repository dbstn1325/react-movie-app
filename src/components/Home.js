import { useState, useEffect } from "react";
import Movie from "./Movie";
import styles from "./Home.module.css";

const Home = () =>{
    const [ loading, setLoading ] = useState(true);
    const [ movies, setMovies ] = useState([]);

    const getMovies = async() =>{
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(()=>{
        getMovies();
    },[]);

    return (
        <div className={styles.container}>
            {loading ? <span className={styles.loader}>Loading...</span> : (
                <div className={styles.movies}>
                    {movies.map((movie)=>(
                        <Movie
                        key={movie.id}
                        CoverImage={movie.medium_cover_image}
                        title={movie.title}
                        genres={movie.genres}
                        summary={movie.summary}
                        id={movie.id}
                        />
                    ))}
                </div>
            )
            }
        </div>
        
        
    
    );
}

export default Home;