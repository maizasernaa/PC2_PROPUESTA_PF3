// src/components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Comercio Formal', path: '/directorio' },
    { name: 'Salubridad', path: '/salubridad' },
    { name: 'Panel Admin', path: '/dashboard' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-emerald-700">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">¶</div>
          LaParadaDigital
        </div>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition ${location.pathname === link.path ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
