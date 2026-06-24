import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Users, Truck, Package, ShieldCheck } from 'lucide-react';

interface Comerciante {
  id: string;
  nombre_completo: string;
  rubro: string;
  puesto: string;
}

interface Estibador {
  id: string;
  nombre_completo: string;
  dni: string;
  estado: string;
}

export default function Dashboard() {
  const [comerciantes, setComerciantes] = useState<Comerciante[]>([]);
  const [estibadores, setEstibadores] = useState<Estibador[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: comerciantesData, error: errorC } = await supabase
          .from('comerciantes')
          .select('*')
          .order('created_at', { ascending: false });

        const { data: estibadoresData, error: errorE } = await supabase
          .from('estibadores')
          .select('*')
          .order('created_at', { ascending: false });

        if (errorC) throw errorC;
        if (errorE) throw errorE;

        setComerciantes(comerciantesData || []);
        setEstibadores(estibadoresData || []);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Encabezado */}
        <header className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sistema de Control - La Parada</h1>
            <p className="text-gray-500 mt-1">Gestión formal de comerciantes y registro de estibaje</p>
          </div>
          <ShieldCheck className="w-10 h-10 text-emerald-600" />
        </header>

        {/* Tarjetas de Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Comerciantes Formalizados</p>
              <p className="text-2xl font-bold text-gray-900">{comerciantes.length}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Estibadores Empadronados</p>
              <p className="text-2xl font-bold text-gray-900">{estibadores.length}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Rubros Controlados</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>

        {/* Sección de Tablas */}
        {loading ? (
          <div className="text-center py-12 text-gray-500 font-medium animate-pulse">
            Sincronizando con Supabase...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Tabla Comerciantes */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Padrón de Comerciantes</h2>
                <a href="/registro" className="text-sm text-blue-600 font-semibold hover:text-blue-700">
                  + Nuevo Registro
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Nombre Completo</th>
                      <th className="px-6 py-4 font-semibold">Rubro</th>
                      <th className="px-6 py-4 font-semibold">Puesto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comerciantes.map((c) => (
                      <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{c.nombre_completo}</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold tracking-wide">
                            {c.rubro}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500">{c.puesto}</td>
                      </tr>
                    ))}
                    {comerciantes.length === 0 && (
                      <tr>
                        <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                          No hay comerciantes registrados aún.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tabla Estibadores */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Control de Estibadores</h2>
                <a href="/registro" className="text-sm text-emerald-600 font-semibold hover:text-emerald-700">
                  + Nuevo Registro
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Nombre Completo</th>
                      <th className="px-6 py-4 font-semibold">DNI</th>
                      <th className="px-6 py-4 font-semibold">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {estibadores.map((e) => (
                      <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{e.nombre_completo}</td>
                        <td className="px-6 py-4 text-gray-500">{e.dni}</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-semibold tracking-wide">
                            {e.estado}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {estibadores.length === 0 && (
                      <tr>
                        <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                          No hay estibadores registrados aún.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
