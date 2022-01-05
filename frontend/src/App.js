//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import AddTask from './components/AddTask';
import Display from './components/Display';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddTask" element={<AddTask />} />
          <Route path="/Display" element={<Display />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
