import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Store } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Directorio() {
  const [comerciantes, setComerciantes] = useState<any[]>([]);
  const [filtro, setFiltro] = useState('Todos');
  const categorias = ['Todos', 'Frutas', 'Verduras', 'Abarrotes', 'Tubérculos'];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('comerciantes').select('*');
      setComerciantes(data || []);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Directorio de Proveedores</h1>
        
        {/* Filtros */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {categorias.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFiltro(cat)}
              className={`px-6 py-2 rounded-full font-medium transition ${filtro === cat ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white border hover:border-emerald-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-8">
          {comerciantes.filter(c => filtro === 'Todos' || c.rubro === filtro).map((c) => (
            <div key={c.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Store size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{c.nombre_completo}</h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">{c.descripcion}</p>
              <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  {c.anios_experiencia} años
                </span>
                <span className="text-sm font-semibold text-gray-400">Puesto: {c.puesto}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
