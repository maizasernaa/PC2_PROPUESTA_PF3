const registrarActa = async () => {
  const { error } = await supabase.from('actas_sanitarias').insert([{
    codigo_puesto: puesto,
    inspector_id: user.id, // ID del inspector logueado
    fecha_registro: new Date().toISOString(), // Timestamp real del servidor
    estado: estadoSeleccionado,
    ...restoDelFormulario
  }]);
  
  if (!error) alert("Acta registrada legalmente en el sistema.");
};
