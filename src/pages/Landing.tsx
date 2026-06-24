import { useNavigate } from 'react-router-dom';
import { Store, Truck, ShieldCheck } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    { 
      icon: Store, 
      title: "Comercio Formal", 
      desc: "Registro transparente de cada puesto." 
    },
    { 
      icon: Truck, 
      title: "Logística Segura", 
      desc: "Estibadores validados para carga." 
    },
    { 
      icon: ShieldCheck, 
      title: "Salubridad Total", 
      desc: "Seguimiento de calidad de productos." 
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-emerald-600">LaParadaDigital</h1>
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition"
        >
          Ingresar al Sistema
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-6xl font-extrabold mb-6">El futuro del mercado mayorista</h2>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Formalizamos el comercio y garantizamos la trazabilidad de los productos de La Parada.
        </p>
        
        {/* Botones/Tarjetas */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feat, i) => (
            <button 
              key={i} 
              onClick={() => navigate('/directorio')}
              className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all text-center w-full flex flex-col items-center"
            >
              <feat.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold">{feat.title}</h3>
              <p className="text-gray-600 mt-2">{feat.desc}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
