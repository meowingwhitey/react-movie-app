import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    async function getMovie(){
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading</h1>
            : 
            <div>
                <div><img src={movie.large_cover_image}></img></div>
                <div>{movie.title}</div>
                <div>{movie.year}</div>
                <div>{movie.rating}</div>
                <div>{movie.runtime}</div>
            </div>
            }  
        </div>
    );
}
export default Detail;