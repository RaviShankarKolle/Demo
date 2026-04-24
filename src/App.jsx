import {useState,useEffect} from "react";
import mockMovies from "./data/mockMovies";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import Header from "./components/Header";

const MOVIES_INITIAL=20;

const MOVIES_PER_LOAD=10;

const App = () => {
  const [movies,setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(MOVIES_INITIAL);
  const [modalMovie,setModalMovie] = useState(null);
  const [searchTerm,setSearchTerm] = useState("");
  const [sortYear,setSortYear] = useState(null);
  const [darkMode,setDarkMode] = useState(false);

  console.log(darkMode);


//  console.log(modalMovie);

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + MOVIES_PER_LOAD);
  };

  const filteredMovies=movies.filter((movie)=>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()));


  if(sortYear==="asc"){
    filteredMovies.sort((a,b)=>a.year-b.year);
  }else if(sortYear==="desc"){
    filteredMovies.sort((a,b)=>b.year-a.year);
  }

  const displayMovies=filteredMovies.slice(0,visibleCount);  
  return (
    
  <div className={darkMode ? "app dark" : "app"}>
    <Header searchTerm={searchTerm}
     setSearchTerm={setSearchTerm} sortYear={sortYear} 
     setSortYear={setSortYear} 
    darkMode ={darkMode}
     setDarkMode={setDarkMode} 
     />
    <div className="movie-list">
     {
      displayMovies.map((movie) => (
<MovieCard key={movie.id} movie={movie} openModal={setModalMovie} />
      ))
     }
    </div>

    {
      visibleCount < movies.length && (
        <div className="load-more-container">
      <button onClick={handleLoadMore} className="load-more-btn">Show More</button>
    </div>
)}

{
  modalMovie &&
   (<MovieModal movie={modalMovie} closeModal={() => setModalMovie(null)} />)
}
  

</div>
    


  );

  
};

export default App
