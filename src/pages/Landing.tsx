import { Link } from 'react-router-dom';
import { ShieldCheck, Truck } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar simplificado */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="font-bold text-xl text-emerald-700">LaParadaDigital</h1>
        <div className="flex gap-6 text-sm font-semibold text-gray-600">
          <Link to="/" className="hover:text-emerald-600">Inicio</Link>
          <Link to="/directorio" className="hover:text-emerald-600">Comercio Formal</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div className="max-w-2xl mb-16">
          <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase">Plataforma oficial de formalización</span>
          <h1 className="text-6xl font-extrabold text-gray-900 mt-4 leading-tight">
            Un mercado <span className="text-emerald-600">formal</span>, transparente y al servicio de todos.
          </h1>
          <p className="text-gray-500 mt-6 text-lg">
            LaParadaDigital reúne en un solo lugar el registro de comerciantes, la logística diaria y la gestión del mercado. Confianza para los vecinos, oportunidades para los comerciantes.
          </p>
        </div>

        {/* Tarjetas de Navegación (Solo las 2 solicitadas) */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Tarjeta Comercio Formal */}
          <div className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Comercio Formal</h3>
            <p className="text-gray-500 mb-6">Directorio oficial de comerciantes registrados y certificados del mercado.</p>
            <Link to="/directorio" className="font-bold text-emerald-600 flex items-center gap-2 hover:underline">
              Explorar →
            </Link>
          </div>

          {/* Tarjeta Logística */}
          <div className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Truck size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Logística</h3>
            <p className="text-gray-500 mb-6">Coordinación de ingreso de mercadería, horarios y zonas de carga.</p>
            <Link to="/logistica" className="font-bold text-emerald-600 flex items-center gap-2 hover:underline">
              Explorar →
            </Link>
          </div>
          
        </div>
      </main>
    </div>
  );
}
