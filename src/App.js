import { useState } from 'react';
import './App.css';
import { moviesCatalog } from './MovieInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
  // states
const [movies, setMovies] = useState(moviesCatalog)
const [search, setSearch] = useState("")


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



  return (
    <div className="App">
<Filter search={search} handleSearch={handleSearch} />
<MovieList movies={movies}  search={search} del={handleDelete}  />
<AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
