import { Link } from 'react-router-dom';
import { Store, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-emerald-600">LaParadaDigital</h1>
        <Link to="/dashboard" className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
          Ingresar al Sistema
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-6xl font-extrabold mb-6">El futuro del mercado mayorista</h2>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Formalizamos el comercio y garantizamos la trazabilidad de los productos de La Parada.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Store, title: "Comercio Formal", desc: "Registro transparente de cada puesto." },
            { icon: Truck, title: "Logística Segura", desc: "Estibadores validados para carga." },
            { icon: ShieldCheck, title: "Salubridad Total", desc: "Seguimiento de calidad de productos." }
          ].map((feat, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <feat.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold">{feat.title}</h3>
              <p className="text-gray-600 mt-2">{feat.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
