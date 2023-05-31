import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import SearchForm from './components/SearchForm';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SearchForm />
      <Grid />
    </div>
  );
}

export default App;
