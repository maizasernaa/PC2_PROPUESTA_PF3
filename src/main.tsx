import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Registro from './pages/Registro';
import Directorio from './pages/Directorio';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta pública principal */}
        <Route path="/" element={<Landing />} />
        <Route path="/directorio" element={<Directorio />} />
        {/* Panel de administración */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Formulario de registro (formalización) */}
        <Route path="/registro" element={<Registro />} />
        
        {/* Redirección por defecto ante rutas inexistentes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
