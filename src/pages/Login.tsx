import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // AQUÍ ESTÁ LA MAGIA: Si el usuario es 'admin', le das la llave
    if (user === 'admin' && pass === '123456') {
      localStorage.setItem('isAuthenticated', 'true'); 
      navigate('/dashboard'); // Te manda al panel
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl border shadow-sm w-96">
        <h2 className="text-2xl font-bold mb-6">Acceso Administrativo</h2>
        <input placeholder="Usuario (admin)" className="w-full p-3 border rounded-xl mb-4" onChange={(e) => setUser(e.target.value)} />
        <input type="password" placeholder="Clave (123456)" className="w-full p-3 border rounded-xl mb-6" onChange={(e) => setPass(e.target.value)} />
        <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold">Ingresar</button>
      </form>
    </div>
  );
}
