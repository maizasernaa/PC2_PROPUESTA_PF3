export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md p-4 flex justify-between px-8 border-b border-gray-100 z-50">
      <h1 className="font-bold text-xl text-emerald-600">LaParadaDigital</h1>
      <div className="space-x-6 text-sm font-medium">
        <a href="/" className="hover:text-emerald-600 transition">Inicio</a>
        <a href="/directorio" className="hover:text-emerald-600 transition">Directorio</a>
        <a href="/dashboard" className="hover:text-emerald-600 transition">Admin</a>
      </div>
    </nav>
  );
}
