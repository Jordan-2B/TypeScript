import { Button } from "./button";

interface Props {
  form: { nombre: string; edad: string; correo: string; telefono: string; ciudad: string; };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGuardar: () => void;
}

export function FormularioInfo({ form, onChange, onGuardar }: Props) {
  return (
    <aside className="w-1/5">
      <div className="h-full bg-[#111111] rounded-2xl border border-[#2a2a2a] flex flex-col p-4">
        <p className="text-xs uppercase tracking-widest text-white-400 text-center mb-4">
          Informacion
        </p>
        <form>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            
            <label className="text-xs text-white tracking-wide">Nombre</label>
            <input className="bg-[#0a0a0a] border border-[#2a2a2a] p-2 rounded-lg text-white focus:outline-none focus:border-gray-400"
              type='text' name="nombre" value={form.nombre} onChange={onChange} />

            <label className="text-xs text-white tracking-wide">Edad</label>
            <input className="bg-[#0a0a0a] border border-[#2a2a2a] p-2 rounded-lg text-white focus:outline-none focus:border-gray-400"
              type='number' name="edad" value={form.edad} onChange={onChange} />

            <label className="text-xs text-white tracking-wide">Correo</label>
            <input className="bg-[#0a0a0a] border border-[#2a2a2a] p-2 rounded-lg text-white focus:outline-none focus:border-gray-400"
              type='email' name="correo" value={form.correo} onChange={onChange} />

            <label className="text-xs text-white tracking-wide">Teléfono</label>
            <input className="bg-[#0a0a0a] border border-[#2a2a2a] p-2 rounded-lg text-white focus:outline-none focus:border-gray-400"
              type='text' name="telefono" value={form.telefono} onChange={onChange} />

            <label className="text-xs text-white tracking-wide">Ciudad</label>
            <input className="bg-[#0a0a0a] border border-[#2a2a2a] p-2 rounded-lg text-white focus:outline-none focus:border-gray-400"
              type='text' name="ciudad" value={form.ciudad} onChange={onChange} />
          </div>
        </div>
        </form>
        <Button onClick={onGuardar} className="mt-auto bg-[#1a1a1a]">
          Guardar
        </Button>
      </div>
    </aside>
  );
}