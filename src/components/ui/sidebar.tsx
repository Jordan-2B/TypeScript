import { usePersonas } from "../../hooks/usePersonas";
import { ListaPersonas } from "./listaPersonas";
import { VisorPdf } from "./visorPdf";
import { FormularioInfo } from "./formularioInfo";

export default function Sidebar() {
  const {
    personas, form, indiceSeleccionado, personaSeleccionada,
    irAPersona, irAnterior, irSiguiente, handleChange, handleGuardar,
  } = usePersonas();

  return (
    <div className="flex h-screen bg-[#0a0a0a] p-4 gap-4 text-[#e5e5e5]">
      <ListaPersonas
        personas={personas}
        indiceSeleccionado={indiceSeleccionado}
        onSeleccionar={irAPersona}
      />
      <VisorPdf
        personaSeleccionada={personaSeleccionada}
        onAnterior={irAnterior}
        onSiguiente={irSiguiente}
      />
      <FormularioInfo
        form={form}
        onChange={handleChange}
        onGuardar={handleGuardar}
      />
    </div>
  );
}