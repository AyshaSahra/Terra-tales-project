import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import DestinationPage from './components/pages/DestinationPage';
import HiddenSpot from './components/pages/HiddenSpot';
import ItineraryPage from './components/pages/ItineraryPage';
import SignUp from './components/profile/SignUp';
import SignUpMongo from './components/profile/SignUp';
import LoginPage from './components/profile/loginPage';
import FavouritePage from './components/pages/FavouritesPage';
import DestinationLanding from './components/landinga pages/DestinationLanding'
import ItineraryLanding from './components/landinga pages/ItineraryLanding';
import WeatherWidget from '../src/components/weather/WeatherWidget'
import GoogleMapComponent from '../src/components/weather/GoogleMapComponent'
import HiddenLanding from './components/landinga pages/HiddenLanding';

function App() {
  return (
    <div className="App">
      
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/destination" element={<DestinationPage/>} />
            <Route path="/hidden-spot" element={<HiddenSpot/>} />
            <Route path="/itinerary" element={<ItineraryPage/>} />
            <Route path="/favourite" element={<FavouritePage/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/weather' element={<WeatherWidget/>}/>
            <Route path='/maps' element={<GoogleMapComponent/>}/>
            <Route path="/destination/:id" element={<DestinationLanding/>} />
            <Route path="/hidden-spot/:id" element={<HiddenLanding/>} />
            <Route path="/itinerary/:id" element={<ItineraryLanding/>} />
          </Routes>
          
    </div>
  );
}

export default App;