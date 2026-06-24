import { useState } from 'react';
import Navbar from '../components/Navbar'; // Esto sube un nivel a 'src' y luego entra a 'components'
import { ShieldCheck, ClipboardCheck } from 'lucide-react';
export default function Salubridad() {
  const [calificacion, setCalificacion] = useState(0);

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
          <p className="text-gray-500 mt-2 text-lg">Completa el acta sanitaria del puesto y queda registrada como evidencia.</p>
        </div>

        {/* Grid Principal */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Formulario */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><ClipboardCheck /> Nueva acta</h2>
            
            <input className="w-full p-4 border rounded-xl" placeholder="Código de puesto" />
            <input className="w-full p-4 border rounded-xl" placeholder="Nombre del comerciante" />

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">Nivel de Higiene (1-5)</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} onClick={() => setCalificacion(n)} className={`w-12 h-12 rounded-full font-bold ${calificacion === n ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Área limpia', 'Almacenamiento', 'Carnet sanitario', 'Control plagas'].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm p-3 border rounded-xl">
                  <input type="checkbox" className="w-4 h-4 accent-emerald-600" /> {item}
                </label>
              ))}
            </div>

            <textarea className="w-full p-4 border rounded-xl" rows={3} placeholder="Observaciones..." />
            
            <div className="flex gap-2">
              {['Aprobado', 'Observado', 'Rechazado'].map((estado) => (
                <button key={estado} className="flex-1 py-3 rounded-xl border font-bold hover:bg-emerald-50">{estado}</button>
              ))}
            </div>
            
            <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold">Registrar acta</button>
          </div>

          {/* Registro Lateral */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-fit">
            <h3 className="text-xl font-bold mb-4">Actas registradas</h3>
            <div className="text-center py-10 border-2 border-dashed rounded-2xl">
              <p className="text-gray-400">Aún no hay actas registradas.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
