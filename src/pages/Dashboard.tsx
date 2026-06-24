import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Users, Truck, Package } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const [comerciantes, setComerciantes] = useState<any[]>([]);
  const [estibadores, setEstibadores] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: cData } = await supabase.from('comerciantes').select('*');
      const { data: eData } = await supabase.from('estibadores').select('*');
      setComerciantes(cData || []);
      setEstibadores(eData || []);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header del Dashboard */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Control - La Parada</h1>
          <p className="text-gray-500 mt-2">Gestión formal de comerciantes y registro de estibaje</p>
        </div>

        {/* Tarjetas de Estadísticas */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Comerciantes Formalizados", count: comerciantes.length, icon: Users, color: "text-blue-600" },
            { title: "Estibadores Empadronados", count: estibadores.length, icon: Truck, color: "text-emerald-600" },
            { title: "Rubros Controlados", count: 3, icon: Package, color: "text-orange-600" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <h2 className="text-3xl font-bold mt-2">{stat.count}</h2>
            </div>
          ))}
        </div>

        {/* Tablas de Gestión */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Padrón de Comerciantes */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Padrón de Comerciantes</h3>
              <Link to="/registro" className="text-sm text-blue-600 font-bold hover:underline">
                + Nuevo Registro
              </Link>
            </div>
            <div className="space-y-4">
              {comerciantes.map((c) => (
                <div key={c.id} className="flex justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="font-medium">{c.nombre_completo}</span>
                  <span className="text-gray-500 text-sm">{c.puesto}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Control de Estibadores */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Control de Estibadores</h3>
              <Link to="/registro" className="text-sm text-emerald-600 font-bold hover:underline">
                + Nuevo Registro
              </Link>
            </div>
            <div className="space-y-4">
              {estibadores.map((e) => (
                <div key={e.id} className="flex justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="font-medium">{e.nombre_completo}</span>
                  <span className="text-emerald-600 font-semibold text-xs bg-emerald-50 px-2 py-1 rounded">Activo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
