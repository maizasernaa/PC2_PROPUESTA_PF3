import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Salubridad from './pages/Salubridad';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Quitamos el PrivateRoute para que sea acceso libre */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/salubridad" element={<Salubridad />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}
