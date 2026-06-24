import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { CheckCircle2, User, Store, ShieldCheck } from 'lucide-react';

export default function Registro() {
  const [paso, setPaso] = useState(1);
  const [formData, setFormData] = useState({ nombre: '', dni: '', telefono: '', rubro: '', puesto: '' });
  const navigate = useNavigate();

  const handleNext = () => setPaso(prev => prev + 1);
  const handleBack = () => setPaso(prev => prev - 1);

  const guardarRegistro = async () => {
    await supabase.from('comerciantes').insert([formData]);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 mt-10">
      {/* Barra de progreso */}
      <div className="flex justify-between mb-12 px-10">
        {[ { icon: User, label: "Datos personales" }, { icon: Store, label: "Detalles del puesto" }, { icon: ShieldCheck, label: "Confirmación" } ].map((step, i) => (
          <div key={i} className={`flex flex-col items-center ${paso >= i + 1 ? 'text-emerald-600' : 'text-gray-300'}`}>
            <div className={`p-3 rounded-full border-2 mb-2 ${paso >= i + 1 ? 'border-emerald-600' : 'border-gray-200'}`}>
              <step.icon size={20} />
            </div>
            <span className="text-xs font-bold">{step.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        {paso === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Datos Personales</h2>
            <input placeholder="Nombre completo" className="w-full p-4 border rounded-xl" onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
            <div className="flex gap-4">
              <input placeholder="DNI" className="w-full p-4 border rounded-xl" onChange={(e) => setFormData({...formData, dni: e.target.value})} />
              <input placeholder="Teléfono" className="w-full p-4 border rounded-xl" onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
            </div>
          </div>
        )}

        {paso === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Detalles del Puesto</h2>
            <input placeholder="Rubro (Ej: Frutas)" className="w-full p-4 border rounded-xl" onChange={(e) => setFormData({...formData, rubro: e.target.value})} />
            <input placeholder="Número de puesto" className="w-full p-4 border rounded-xl" onChange={(e) => setFormData({...formData, puesto: e.target.value})} />
          </div>
        )}

        {paso === 3 && (
          <div className="text-center py-10">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">¿Todo correcto?</h2>
            <p className="text-gray-500">Haz clic en finalizar para guardar el registro.</p>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button onClick={handleBack} disabled={paso === 1} className="px-6 py-3 text-gray-500 font-bold">Atrás</button>
          <button onClick={paso === 3 ? guardarRegistro : handleNext} className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700">
            {paso === 3 ? 'Finalizar' : 'Siguiente'}
          </button>
        </div>
      </div>
    </div>
  );
}
