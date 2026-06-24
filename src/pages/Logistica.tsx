import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Truck, Clock } from 'lucide-react';

export default function Logistica() {
  const [ingresos, setIngresos] = useState<{id: number, placa: string, zona: string}[]>([]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32">
        <h1 className="text-4xl font-bold mb-8">Gestión Logística</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario de registro */}
          <div className="bg-white p-8 rounded-3xl border shadow-sm">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Truck className="text-emerald-600" /> Registrar Vehículo
            </h2>
            {/* Aquí irían tus inputs de placa y selección de zona */}
            <button 
              onClick={() => setIngresos([...ingresos, {id: Date.now(), placa: 'ABC-123', zona: 'Zona A'}])}
              className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold"
            >
              Registrar Ingreso
            </button>
          </div>

          {/* Tabla de estado */}
          <div className="bg-white p-8 rounded-3xl border shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Clock className="text-emerald-600" /> Estado actual
            </h3>
            {ingresos.map(i => (
              <div key={i.id} className="border-b py-2 flex justify-between">
                <span>Vehículo {i.placa}</span>
                <span className="text-emerald-600 font-bold">{i.zona}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
