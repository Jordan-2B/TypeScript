import { useEffect } from "react";
import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Persona } from '../../types/persona';

interface Props {
  personaSeleccionada: Persona | null;
  onAnterior: () => void;
  onSiguiente: () => void;
}

export function VisorPdf({ personaSeleccionada, onAnterior, onSiguiente }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onAnterior();
      else if (e.key === "ArrowRight") onSiguiente();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onAnterior, onSiguiente]);

  return (
    <main className="w-3/5 bg-[#111111] rounded-2xl border border-[#2a2a2a] flex flex-col relative overflow-hidden">
      <div className="flex-1">
        {personaSeleccionada ? (
          <iframe
            src={personaSeleccionada.pdfUrl}
            className="w-full h-full border-0" />) 
            : (
          <div className="flex items-center justify-center h-full text-white-400">
          Selecciona una persona para ver su PDF </div>)}

      </div>
      <div className="absolute bottom-4 w-full flex justify-center gap-4">
        <Button size="icon" onClick={onAnterior} className="bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#2a2a2a]">
          <ArrowLeft />
        </Button>
        <Button size="icon" onClick={onSiguiente} className="bg-[#1a1a1a] border border-[#2a2a2a] hover:bg-[#2a2a2a]">
          <ArrowRight />
        </Button>
      </div>
    </main>
  );
}