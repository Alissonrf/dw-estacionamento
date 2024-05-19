import React from 'react';
import ReservaForm from './views/ReservationForm';
import ReservationList from './views/ReservationList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Cadastro de Reservas</Link>
            </li>
            <li>
              <Link to="/list">Lista das Reservas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ReservaForm />} />
          <Route path="/list" element={<ReservationList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;