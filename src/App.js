import {useState} from  "react";
import {moviesData} from "./MoviesData";
import MovieList from "./MoviesList";
import AddMovie from "./AddMovie/AddMovie";
import SearchMovie from "./SearchMovie/SearchMovie";
import './App.css';

export default function App(){
  const [movies,setMovies]=useState(moviesData)
  const [nameSearch, setNameSearch] = useState("")
  const [rateSearch, setRatesSearch] = useState(0)
  const handleAdd=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
const  filtredlist=movies.filter(movies=>movies.name.toUpperCase().includes(nameSearch.toUpperCase())&& movies.rating>=rateSearch)
  return(
    <div className="App">
   <SearchMovie 
    setNameSearch={setNameSearch}
     nameSearch={nameSearch} 
     rateSearch={rateSearch}
     setRatesSearch={setRatesSearch}  />
   <MovieList  movies={filtredlist}  />
   <AddMovie  handleAdd={handleAdd} />
   
  
    </div>
  );
}

