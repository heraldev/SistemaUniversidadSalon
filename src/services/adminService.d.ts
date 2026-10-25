export interface Carrera {
  id: number;
  nombre: string;
  facultad: string;
  descripcion: string;
  estado: string;
}

export function listarCarreras(estado?: string | null): Promise<Carrera[]>;
export function obtenerCarrera(id: number): Promise<Carrera>;
export function crearCarrera(carrera: Partial<Carrera>): Promise<Carrera>;
export function actualizarCarrera(id: number, datos: Partial<Carrera>): Promise<Carrera>;
export function eliminarCarrera(id: number): Promise<void>;
export function publicarCarrera(id: number): Promise<Carrera>;
