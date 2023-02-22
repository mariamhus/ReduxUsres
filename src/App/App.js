import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import About from '../Pages/About';
import Add from '../Pages/Add';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import MoviesDetails from '../Pages/MoviesDetails';
import NotFound from '../Pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Header></Header>
<Routes>
<Route path='/' element={<Home></Home>}></Route> 
<Route path='movies' element={<Movies></Movies>}></Route>  
<Route path='about' element={<About></About>}></Route>  
<Route path='movie/:movieId' element={<MoviesDetails></MoviesDetails>}></Route>  
<Route path='movies/add' element={<Add></Add>}></Route>  
<Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;