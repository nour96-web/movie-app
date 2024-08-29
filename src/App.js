import { useState } from 'react';
import './App.css';
import { moviesCatalog } from './MovieInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

function App() {
  // states
const [movies, setMovies] = useState(moviesCatalog)
const [search, setSearch] = useState("");
const [rateStar, setRateStar] = useState(0);
let role = "add";


  // fonctions

const handleSearch = (e) => {
setSearch(e.target.value);
}

const handleAdd = (newMovie) => {
setMovies([...movies, newMovie])
}

const handleDelete = (id) => {
  setMovies(movies.filter(el=>el.id !== id))
  }

const handleStar =(x)=> setRateStar(x)


  return (
    <div className="App">

<BrowserRouter>
<Filter rateStar={rateStar} search={search} handleSearch={handleSearch} handleStar={handleStar} />
      
      
      <Routes>
        <Route path="/" element={ <MovieList rateStar={rateStar} movies={movies}  search={search} del={handleDelete}  /> } />

        <Route path="/add" element={ 
          
          <AddMovie handleAdd={handleAdd} role={role} /> } />
      <Route path="/details/movie/:id" element={ <MovieDetails movies={movies} /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
