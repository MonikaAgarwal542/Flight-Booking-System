

import Home from './Components/Home';
import AboutUs from './Components/AboutUs'
import Faqs from './Components/Faqs'
import ErrorPage from './Components/ErrorPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchFlight from './Components/SearchFlight';
import SignupForm from './Components/SignupForm';
import AdminDashboard from './Components/AdminDashboard'
import Footer from './Components/Footer'
import Booked from './Components/Booked'
import FlightsList from './Components/FlightsList';
function App() {
  return (
    <div className="appWrapper">


      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Navigate to='/home' />}></Route>
          <Route path='/home' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/FAQ' element={<Faqs />} />
          <Route path='/searchflight' element={<SearchFlight />} />
          <Route path='/booked' element={<Booked />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/adminDashboard' element={<AdminDashboard />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/FlightsList' element={<FlightsList />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>

      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
