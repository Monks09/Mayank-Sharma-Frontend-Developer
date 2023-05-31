import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import Grid from './components/Grid';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SearchForm />
      <Grid />
      <Pagination />
    </div>
  );
}

export default App;
