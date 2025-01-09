import {useState, useEffect} from "react"

// 7-2 then보다는 async await를 사용함.
// fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
//     .then(response => response.json())
//     .then( (json) => {
//         setMovies(json.data.movies);
//         setLoading(false);
//     });

// 아래의 코드와 같다.
// const getMovies = async() => {
//     const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
//     const json = await response.json();
//     setMovies(json.data.movies);
//     setLoading(false);
// }

function App() {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect( () => {
        getMovies();
    }, [])
    return (
        <div>
            {loading ?
                <h1>Loading...</h1> :
                <div>{movies.map(movie =>
                    <div key={movie.id}>
                        <img src={movie.medium_cover_image} />
                        <h2>{movie.title}</h2>
                        <p>{movie.summary}</p>
                        <ul>
                            {movie.genres.map(g => <li key={g}>{g}</li>)}
                        </ul>
                    </div>)}
                </div>
            }
        </div>
    );


}

export default App;
