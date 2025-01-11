import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

// useParams을 사용해서 url 변수를 알아올수있다.
// await은 async 안에있어야 사용할 수 있다.

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null)
    const {id} = useParams();

    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovie(json);
    }
    useEffect(() => {
        getMovie();

        setLoading(true);

    }, []);
    return <div>
    {

        loading ? <h1>Loading....</h1> :
            <div>
                <Movie
                    id={movie.data.movie.id}
                    coverImg={movie.data.movie.medium_cover_image}
                    title={movie.data.movie.title}
                    summary={movie.data.movie.summary}
                    genres={movie.data.movie.genres}/>
            </div>
    }

    </div>
}
export default Detail;