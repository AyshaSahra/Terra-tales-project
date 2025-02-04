import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import NavBar from './components/navbar/NavBar';
import FooterElement from './components/footer/FooterElement';

function App() {
  return (
    <div className="App">
      <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
      
      <FooterElement/>
    </div>
  );
}

export default App;