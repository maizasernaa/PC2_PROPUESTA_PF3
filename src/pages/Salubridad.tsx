import Navbar from '../components/Navbar';
import { ShieldCheck, ClipboardCheck, FileText, CheckCircle, XCircle } from 'lucide-react';

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

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Tarjetas de estado simplificadas */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600"><CheckCircle /></div>
            <div>
              <p className="text-sm text-gray-500">Aprobados</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
          {/* ... otras tarjetas ... */}
        </section>
      </main>
    </div>
  );
}
