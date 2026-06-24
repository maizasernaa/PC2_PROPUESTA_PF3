const [filtro, setFiltro] = useState('Todos');
const categorias = ['Todos', 'Frutas', 'Verduras', 'Abarrotes', 'Tubérculos'];

// En tu JSX:
<div className="flex gap-2 mb-8 overflow-x-auto pb-2">
  {categorias.map(cat => (
    <button 
      key={cat} 
      onClick={() => setFiltro(cat)}
      className={`px-4 py-2 rounded-full font-medium transition ${filtro === cat ? 'bg-emerald-600 text-white' : 'bg-white border'}`}
    >
      {cat}
    </button>
  ))}
</div>

{/* Filtrado antes del map */}
{comerciantes.filter(c => filtro === 'Todos' || c.rubro === filtro).map(c => (
  // ... tu tarjeta aquí
))}
