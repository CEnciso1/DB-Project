//import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav";
import Home from "./components/home";
import SearchBar from "./components/searchBar";
import BorrowerManagement from "./components/borrowerManagement";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App()
{
    return (
      <Router>     
        <div className="App">
              <Nav />
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Search" element={<SearchBar />} />    
                    <Route path="/BorrowerManagement" element ={<BorrowerManagement/>} />
              </Routes>
        </div>
      </Router>
  );
}

export default App;
