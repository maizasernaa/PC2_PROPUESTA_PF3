import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Registro from './pages/Registro';
import Logistica from './pages/Logistica'; // 1. Importa
import Directorio from './pages/Directorio';
import Salubridad from './pages/Salubridad'; // Importación necesaria
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/logistica" element={<Logistica />} />
        <Route path="/salubridad" element={<Salubridad />} /> {/* Ruta activada */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
