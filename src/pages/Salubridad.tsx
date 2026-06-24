import { useState } from 'react';
import Navbar from '../components/Navbar';
import { ShieldCheck, ClipboardCheck } from 'lucide-react';

export default function Salubridad() {
  const [higiene, setHigiene] = useState(3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Encabezado */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full w-fit mb-4">
            <ShieldCheck size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">Portal sanitario</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Salubridad</h1>
          <p className="text-gray-500 mt-2 text-lg">
            Completa el acta sanitaria del puesto y queda registrada como evidencia del cumplimiento.
          </p>
        </div>

        {/* Layout de dos columnas */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Columna Izquierda: Formulario */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <ClipboardCheck className="text-emerald-600" /> Nueva acta sanitaria
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <input className="w-full p-4 border rounded-xl" placeholder="Código de puesto" />
              <input className="w-full p-4 border rounded-xl" placeholder="Ej. María Quispe" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select className="w-full p-4 border rounded-xl bg-white">
                <option>Frutas</option>
                <option>Verduras</option>
                <option>Abarrotes</option>
              </select>
              <input className="w-full p-4 border rounded-xl" placeholder="Ej. Insp. Ramírez" />
            </div>

            <input className="w-full p-4 border rounded-xl" placeholder="Temperatura (°C)" />

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">Higiene general</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button 
                    key={n} 
                    onClick={() => setHigiene(n)} 
                    className={`w-12 h-12 rounded-full font-bold transition ${higiene === n ? 'bg-emerald-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Área de trabajo limpia', 'Almacenamiento adecuado', 'Personal con carnet', 'Control de plagas'].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm p-4 border rounded-xl cursor-pointer hover:border-emerald-500 transition">
                  <input type="checkbox" className="w-4 h-4 accent-emerald-600" /> {item}
                </label>
              ))}
            </div>

            <textarea className="w-full p-4 border rounded-xl" rows={3} placeholder="Observaciones..." />
            
            <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition">
              Registrar acta
            </button>
          </div>

          {/* Columna Derecha: Panel de Actas */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-fit">
            <h3 className="text-xl font-bold mb-4">Actas registradas</h3>
            <div className="text-center py-10 border-2 border-dashed rounded-2xl bg-gray-50/50">
              <p className="text-gray-400">Aún no hay actas registradas.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
