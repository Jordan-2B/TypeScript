import mockup from '../../mockup.json';
import { useState } from 'react';
import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Persona {
  id: number;
  nombre: string;
  edad: number;
  correo: string;
  telefono: string;
  ciudad: string;
  pdfUrl: string;
}

export default function Sidebar() {
  const [indiceSeleccionado, setIndiceSeleccionado] = useState<number | null>(null);
  const personas = mockup as Persona[];

  const personaSeleccionada =
    indiceSeleccionado !== null ? personas[indiceSeleccionado] : null;

  function irAnterior() {
    setIndiceSeleccionado((prev) => {
      const base = prev ?? 0;
      return (base - 1 + personas.length) % personas.length;
    });
  }

  function irSiguiente() {
    setIndiceSeleccionado((prev) => {
      const base = prev ?? -1;
      return (base + 1) % personas.length;
    });
  }

  return (
    <div className="flex h-screen bg-red p-4 gap-4">

      {/* ── SIDEBAR IZQUIERDA (20%) ── */}
      <aside className="w-1/5 bg-black rounded-2xl flex flex-col">

        <div className="border-b border-gray-700 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center">
            PDF
          </p>
        </div>

        {/* LISTA CON SCROLL */}
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {personas.map((persona, index) => (
            <div
              key={persona.id}
              onClick={() => setIndiceSeleccionado(index)}
              className={`flex flex-col items-center justify-center rounded-xl border p-3 cursor-pointer
                ${indiceSeleccionado === index
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-700 bg-black hover:bg-gray-800"
                }`}
            >
              <p className={`text-sm font-semibold ${indiceSeleccionado === index ? "text-black" : "text-white"}`}>
                {persona.nombre}
              </p>
              <p className={`text-xs ${indiceSeleccionado === index ? "text-black" : "text-white"}`}>
                {persona.ciudad}
              </p>
            </div>
          ))}
        </div>

      </aside>

      {/* ── CONTENIDO CENTRAL (60%) ── */}
      <main className="w-3/5 bg-white rounded-2xl flex flex-col relative overflow-hidden">

        <div className="flex-1">
          {personaSeleccionada ? (
            <iframe
              src={personaSeleccionada.pdfUrl}
              className="w-full h-full border-0"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-black">
                Selecciona una persona para ver su PDF
              </p>
            </div>
          )}
        </div>

        {/* BOTONES */}
        <div className="absolute bottom-4 w-full flex justify-center gap-3">
          <Button size="icon" onClick={irAnterior}>
            <ArrowLeft />
          </Button>
          <Button size="icon" onClick={irSiguiente}>
            <ArrowRight />
          </Button>
        </div>

      </main>

      {/* ── PANEL DERECHO (20%) ── */}
<aside className="w-1/5 p-2">
  <div className="h-full bg-black rounded-2xl border border-gray-700 flex flex-col p-4">

    <p className="text-xs font-semibold uppercase tracking-widest text-white text-center mb-3">
      DATOS
    </p>
    <div className="flex flex-col gap-2">
      <input className="w-full p-2 rounded-lg bg-black border border-gray-700 text-white placeholder:text-gray-400" placeholder="Nombre"/>
      <input className="w-full p-2 rounded-lg bg-black border border-gray-700 text-white placeholder:text-gray-400" placeholder="Ciudad"/>
      <input className="w-full p-2 rounded-lg bg-black border border-gray-700 text-white placeholder:text-gray-400" placeholder="Correo"/>
      <input className="w-full p-2 rounded-lg bg-black border border-gray-700 text-white placeholder:text-gray-400" placeholder="Teléfono"/>
    </div>
    <Button className="w-full mt-auto ">
      Guardar
    </Button>

  </div>
</aside>

    </div>
  );
}