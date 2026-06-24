import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';
import { Save, ArrowLeft, UserPlus, AlertCircle } from 'lucide-react';

type TipoRegistro = 'comerciante' | 'estibador';

export default function Registro() {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState<TipoRegistro>('comerciante');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Estados del formulario
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [rubro, setRubro] = useState('Frutas');
  const [puesto, setPuesto] = useState('');
  const [estado, setEstado] = useState('Activo');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (tipo === 'comerciante') {
        const { error: supabaseError } = await supabase
          .from('comerciantes')
          .insert([
            {
              nombre_completo: nombre,
              dni: dni,
              rubro: rubro,
              puesto: puesto,
            },
          ]);
        if (supabaseError) throw supabaseError;
      } else {
        const { error: supabaseError } = await supabase
          .from('estibadores')
          .insert([
            {
              nombre_completo: nombre,
              dni: dni,
              estado: estado,
            },
          ]);
        if (supabaseError) throw supabaseError;
      }

      // Redirigir al dashboard tras el éxito
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Error al registrar:', err);
      setError(err.message || 'Ocurrió un error al guardar el registro. Verifica que el DNI no esté duplicado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-start">
      <div className="w-full max-w-2xl space-y-6">
        
        {/* Navegación y Header */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard" 
            className="p-2 bg-white rounded-lg border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Nuevo Empadronamiento</h1>
            <p className="text-gray-500 text-sm">Registra a un nuevo actor formalizado en el mercado</p>
          </div>
        </div>

        {/* Tarjeta de Formulario */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          
          {/* Selector de Tipo */}
          <div className="flex space-x-4 mb-8">
            <button
              type="button"
              onClick={() => setTipo('comerciante')}
              className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center space-x-2 font-medium transition-all ${
                tipo === 'comerciante' 
                  ? 'bg-blue-50 text-blue-700 border-2 border-blue-200' 
                  : 'bg-gray-50 text-gray-500 border-2 border-transparent hover:bg-gray-100'
              }`}
            >
              <UserPlus className="w-5 h-5" />
              <span>Comerciante</span>
            </button>
            <button
              type="button"
              onClick={() => setTipo('estibador')}
              className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center space-x-2 font-medium transition-all ${
                tipo === 'estibador' 
                  ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200' 
                  : 'bg-gray-50 text-gray-500 border-2 border-transparent hover:bg-gray-100'
              }`}
            >
              <UserPlus className="w-5 h-5" />
              <span>Estibador</span>
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 rounded-xl flex items-start space-x-3 text-red-700 border border-red-100">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Campos Comunes */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">DNI</label>
                <input
                  type="text"
                  required
                  maxLength={8}
                  pattern="\d{8}"
                  value={dni}
                  onChange={(e) => setDni(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="8 dígitos"
                />
              </div>

              {/* Campos Condicionales: Comerciante */}
              {tipo === 'comerciante' && (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Rubro Autorizado</label>
                    <select
                      value={rubro}
                      onChange={(e) => setRubro(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      <option value="Frutas">Frutas</option>
                      <option value="Verduras">Verduras</option>
                      <option value="Tubérculos">Tubérculos</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700">N° de Puesto</label>
                    <input
                      type="text"
                      required
                      value={puesto}
                      onChange={(e) => setPuesto(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Ej. A-12"
                    />
                  </div>
                </>
              )}

              {/* Campos Condicionales: Estibador */}
              {tipo === 'estibador' && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Estado Operativo</label>
                  <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white"
                  >
                    <option value="Activo">Activo (Autorizado)</option>
                    <option value="Suspendido">Suspendido</option>
                  </select>
                </div>
              )}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white py-3.5 px-4 rounded-xl font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="animate-pulse">Guardando registro...</span>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    <span>Guardar en Base de Datos</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
