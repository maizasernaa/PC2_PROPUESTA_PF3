import Navbar from '../components/Navbar';
import { ShieldCheck } from 'lucide-react';

export default function Salubridad() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-28 pb-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-emerald-600 mb-2">
            <ShieldCheck size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">Control Sanitario</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900">Portal de Inspección</h1>
        </header>

        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Bienvenido al sistema</h2>
          <p className="text-gray-600">
            Aquí podrás gestionar el registro de salubridad de los comercios del mercado.
          </p>
        </section>
      </main>
    </div>
  );
}
