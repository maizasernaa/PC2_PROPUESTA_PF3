import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-emerald-700">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">¶</div>
          LaParadaDigital
        </div>

        {/* Links de Navegación */}
        <div className="flex items-center gap-8">
          {[
            { name: 'Inicio', path: '/' },
            { name: 'Comercio Formal', path: '/directorio' },
            { name: 'Salubridad', path: '/salubridad' },
            { name: 'Panel Admin', path: '/dashboard' },
          ].map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-bold transition ${
                location.pathname === link.path 
                ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' 
                : 'text-gray-500 hover:text-emerald-600'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Botón Salir */}
          <button 
            onClick={handleLogout}
            className="ml-4 px-4 py-2 text-xs font-bold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
          >
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
}
