import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

// useParams을 사용해서 url 변수를 알아올수있다.
// await은 async 안에있어야 사용할 수 있다.

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState()


    const {id} = useParams();
    console.log(id);

    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setLoading(false);
        setMovie(json);
    }
    useEffect(() => {
        getMovie();

        setLoading(true);
    }, []);
    return <div>
    {/*    todo*/}

    </div>
}
export default Detail;