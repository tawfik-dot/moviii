import MovieCard from "./MovieCard/MovieCard";

const MoviesList=({movies})=>{
    return(
        <div>
            {
      movies.map(movies=> <MovieCard movies={movies}  />)
            }
        </div>
    )
}
export default MoviesList ;