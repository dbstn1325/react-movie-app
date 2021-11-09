import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

const Detail = () =>{
    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ movieDetail, setMovieDetail ] = useState([]);
    const getMovieId = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovieDetail(json.data.movie);
            setLoading(false);
    }
    useEffect(()=>{
        getMovieId();
    },[]);
    
    return (
        <div>
            {loading ? <span>Loading Movie...</span> : 
            (
                <div className={styles.detail__container}>
                    <img src = {movieDetail.large_cover_image} alt={movieDetail.title}/>
                    <h2> 영화 제목: {movieDetail.title} </h2>
                    <h3> 줄거리: {movieDetail.description_full}</h3>
                    <h4> 평점: {movieDetail.rating} </h4>
                </div>
            )}
        </div>
    )
}

export default Detail;