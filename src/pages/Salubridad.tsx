import Navbar from '../components/Navbar';
import { ShieldCheck, ClipboardCheck } from 'lucide-react';

export default function Salubridad() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-28 pb-12">
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <ShieldCheck size={20} />
              <span className="font-bold tracking-wider uppercase text-sm">Control Sanitario</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900">Gestión de Salubridad</h1>
            <p className="text-gray-500 mt-2 text-lg">Registro y seguimiento de actas sanitarias para puestos formales.</p>
          </div>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition">
            + Nueva Acta
          </button>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { title: 'Actas Pendientes', value: '12', color: 'text-amber-600' },
            { title: 'Aprobados hoy', value: '45', color: 'text-emerald-600' },
            { title: 'Rechazados', value: '3', color: 'text-red-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className={`text-3xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Listado */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <ClipboardCheck className="text-gray-400" />
            <h2 className="text-xl font-bold">Listado de Actas Recientes</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">A-12</div>
                <div>
                  <p className="font-bold">María Gonzales</p>
                  <p className="text-sm text-gray-500">Fecha: 23/06/2026 - Aprobado</p>
                </div>
              </div>
              <button className="text-sm text-emerald-600 font-bold hover:underline">Ver detalle</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
