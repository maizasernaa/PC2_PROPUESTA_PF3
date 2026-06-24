import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Store } from 'lucide-react';

interface Comerciante {
  id: string;
  nombre_completo: string;
  rubro: string;
  puesto: string;
}

export default function Directorio() {
  const [comerciantes, setComerciantes] = useState<Comerciante[]>([]);

  useEffect(() => {
    const fetchComerciantes = async () => {
      const { data } = await supabase.from('comerciantes').select('*');
      setComerciantes(data || []);
    };
    fetchComerciantes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Directorio de Proveedores Formales</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {comerciantes.map((c) => (
            <div key={c.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Store />
              </div>
              <h3 className="text-xl font-bold">{c.nombre_completo}</h3>
              <p className="text-gray-500">Puesto: {c.puesto}</p>
              <span className="inline-block mt-4 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                {c.rubro}
              </span>
            </div>
          ))}
          {comerciantes.length === 0 && (
            <p className="text-gray-500 col-span-3 text-center">No hay proveedores registrados aún.</p>
          )}
        </div>
      </div>
    </div>
  );
}
