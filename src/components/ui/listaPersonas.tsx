import type { Persona } from '../../types/persona';

interface Props {
  personas: Persona[];
  indiceSeleccionado: number | null;
  onSeleccionar: (index: number) => void;
}

export function ListaPersonas({ personas, indiceSeleccionado, onSeleccionar }: Props) {
  return (
    <aside className="w-1/5 bg-[#111111] rounded-2xl border border-[#2a2a2a] flex flex-col">
      <div className="border-b border-[#2a2a2a] px-4 py-3">
        <p className="text-xs uppercase tracking-widest text-white-400 text-center">
          ARCHIVOS
        </p>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {personas.map((persona, index) => (
          <div
            key={persona.id}
            onClick={() => onSeleccionar(index)}
            className={`flex flex-col items-center justify-center rounded-xl border p-3 cursor-pointer transition-all
              ${indiceSeleccionado === index
                ? "border-white bg-[#e5e5e5] text-black"
                : "border-[#2a2a2a] hover:bg-[#1a1a1a]"}`}>
            <p className="text-sm font-semibold">{persona.nombre}</p>
            <p className="text-xs">{persona.ciudad}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}