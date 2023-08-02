import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer'
import Landing from './pages/Landing';
import Register from './pages/account/register';
import LogIn from './pages/account/login';
import ReservationSuccess from './pages/ReservationSuccess';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reservation/success' element={<ReservationSuccess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
