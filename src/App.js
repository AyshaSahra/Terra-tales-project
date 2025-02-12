import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import NavBar from './components/navbar/NavBar';
import FooterElement from './components/footer/FooterElement';
import DestinationPage from './components/pages/DestinationPage';
import HiddenSpot from './components/pages/HiddenSpot';
import ItineraryPage from './components/pages/ItineraryPage';
import SignUp from './components/profile/SignUp';
import LoginPage from './components/profile/loginPage';
import FavouritePage from './components/pages/FavouritesPage';
import DestinationLanding from './components/landinga pages/DestinationLanding'


function App() {
  return (
    <div className="App">
      
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/destination" element={<DestinationPage/>} />
            <Route path="/hidden-spot" element={<HiddenSpot/>} />
            <Route path="/itinerary" element={<ItineraryPage/>} />
            <Route path="/forum" element={<HiddenSpot/>} />
            <Route path="/favourite" element={<FavouritePage/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/place-landing' element={<DestinationLanding/>}/>
          </Routes>
    </div>
  );
}

export default App;