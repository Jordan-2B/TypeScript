import mockup from '../mockup.json';
import { useState } from 'react';
import type { Persona } from '../types/persona';

export function usePersonas() {
  const [personas, setPersonas] = useState<Persona[]>(mockup as Persona[]);
  const [indiceSeleccionado, setIndiceSeleccionado] = useState<number | null>(null);
  const [form, setForm] = useState({
    nombre: "", edad: "", correo: "", telefono: "", ciudad: "",
  });

  const personaSeleccionada = indiceSeleccionado !== null ? personas[indiceSeleccionado] : null;

  function irAPersona(nuevoIndice: number) {
    setIndiceSeleccionado(nuevoIndice);
    const p = personas[nuevoIndice];
    setForm({
      nombre: p.nombre,
      edad: String(p.edad),
      correo: p.correo,
      telefono: p.telefono,
      ciudad: p.ciudad,
    });
  }

  function irAnterior() {
    setIndiceSeleccionado((prev) => {
      const base = prev ?? 0;
      const nuevo = (base - 1 + personas.length) % personas.length;
      irAPersona(nuevo);
      return nuevo;
    });
  }

  function irSiguiente() {
    setIndiceSeleccionado((prev) => {
      const base = prev ?? -1;
      const nuevo = (base + 1) % personas.length;
      irAPersona(nuevo);
      return nuevo;
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

function handleGuardar() {
  if (indiceSeleccionado === null) return;
  setPersonas((prev) =>
    prev.map((p, index) =>
      index !== indiceSeleccionado ? p : {
        ...p,
        nombre: form.nombre,
        edad: Number(form.edad),
        correo: form.correo,
        telefono: form.telefono,
        ciudad: form.ciudad,
      }
    )
  );
  alert(`✓ Cambios guardados para ${form.nombre}`);
}

  return {
    personas, form, indiceSeleccionado, personaSeleccionada,
    irAPersona, irAnterior, irSiguiente, handleChange, handleGuardar,
  };
}