import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Truck, Clock, PlusCircle } from 'lucide-react';

export default function Logistica() {
  const [placa, setPlaca] = useState('');
  const [tienda, setTienda] = useState('');
  const [ingresos, setIngresos] = useState<{id: number, placa: string, tienda: string}[]>([]);

  const registrarIngreso = () => {
    if (placa && tienda) {
      setIngresos([...ingresos, { id: Date.now(), placa, tienda }]);
      setPlaca(''); // Limpiar campos
      setTienda('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10">Gestión Logística</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Panel: Registro */}
          <div className="bg-white p-8 rounded-3xl border shadow-sm space-y-4">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Truck className="text-emerald-600" /> Registrar Vehículo
            </h2>
            
            <input 
              type="text" 
              placeholder="Número de placa (ej. ABC-123)" 
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              className="w-full p-4 border rounded-xl"
            />
            <input 
              type="text" 
              placeholder="Tienda / Puesto destino" 
              value={tienda}
              onChange={(e) => setTienda(e.target.value)}
              className="w-full p-4 border rounded-xl"
            />
            
            <button 
              onClick={registrarIngreso}
              className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              <PlusCircle size={20} /> Registrar Ingreso
            </button>
          </div>

          {/* Panel: Estado Actual */}
          <div className="bg-white p-8 rounded-3xl border shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="text-emerald-600" /> Estado actual
            </h3>
            <div className="space-y-4">
              {ingresos.map((v) => (
                <div key={v.id} className="border-b pb-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-gray-900">Vehículo: {v.placa}</p>
                    <p className="text-sm text-emerald-600 font-semibold">Destino: {v.tienda}</p>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">En ruta</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
