import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="font-bold text-xl text-emerald-700">LaParadaDigital</h1>
        <div className="flex gap-6">
          <Link to="/" className={location.pathname === '/' ? 'text-emerald-600 font-bold' : 'text-gray-500'}>Inicio</Link>
          <Link to="/directorio" className={location.pathname === '/directorio' ? 'text-emerald-600 font-bold' : 'text-gray-500'}>Comercio Formal</Link>
          <Link to="/salubridad" className={location.pathname === '/salubridad' ? 'text-emerald-600 font-bold' : 'text-gray-500'}>Salubridad</Link>
          <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'text-emerald-600 font-bold' : 'text-gray-500'}>Panel Admin</Link>
        </div>
      </div>
    </nav>
  );
}
