import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Registro() {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState<'comerciante' | 'estibador'>('comerciante');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Lógica dinámica según el tipo
    const table = tipo === 'comerciante' ? 'comerciantes' : 'estibadores';
    const dataObj = tipo === 'comerciante' 
      ? { nombre_completo: formData.get('nombre'), rubro: formData.get('rubro'), puesto: formData.get('puesto') }
      : { nombre_completo: formData.get('nombre'), dni: formData.get('dni'), estado: 'Activo' };

    await supabase.from(table).insert([dataObj]);
    navigate('/dashboard'); // Regresa al dashboard al terminar
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-3xl border shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Nuevo Registro</h2>
      
      {/* Selector de Tipo */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTipo('comerciante')} className={`flex-1 py-2 rounded-lg ${tipo === 'comerciante' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Comerciante</button>
        <button onClick={() => setTipo('estibador')} className={`flex-1 py-2 rounded-lg ${tipo === 'estibador' ? 'bg-emerald-600 text-white' : 'bg-gray-100'}`}>Estibador</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="nombre" placeholder="Nombre Completo" className="w-full p-3 border rounded-xl" required />
        {tipo === 'comerciante' ? (
          <>
            <input name="rubro" placeholder="Rubro" className="w-full p-3 border rounded-xl" required />
            <input name="puesto" placeholder="Puesto" className="w-full p-3 border rounded-xl" required />
          </>
        ) : (
          <input name="dni" placeholder="DNI" className="w-full p-3 border rounded-xl" required />
        )}
        <button type="submit" className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold">Guardar</button>
      </form>
    </div>
  );
}
