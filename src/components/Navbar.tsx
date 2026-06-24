import { useState } from 'react';
import Navbar from '../components/Navbar';
// Asegúrate de que esta línea esté presente y sea idéntica:
import { ShieldCheck, ClipboardCheck } from 'lucide-react';

export default function Salubridad() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32">
        <div className="flex items-center gap-3 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full w-fit mb-4">
          <ShieldCheck size={18} />
          <span className="text-sm font-semibold uppercase tracking-wider">Portal sanitario</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Salubridad</h1>
        {/* Aquí va el resto de tu contenido */}
      </main>
    </div>
  );
}
