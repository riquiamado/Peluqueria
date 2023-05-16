// import create from "zustand"
// import {Shifts} from "../models/turnos"
// import axios from "axios"



// type State = {
//     turnos: Shifts[];
//     setTurnos: (turnos: Shifts[]) => Promise<void>
//     fetchTurnos: () => Promise<void>;
//     createTurno: (turnos: Shifts) =>Promise<void>;
//     updateTurno: (id: string, turnos: Shifts) => Promise<void>;
//     deleteTurno: (id: string) => Promise<void>;
//   };

//   export const useTurnoStore = create<State>((set,get) => ({
//     turnos: [],
//     setTurnos()=>set({turnos}),
//     fetchTurnos: async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/turnos');
//         console.log(response.data)
//         get().setTurnos(response.data);
//       } catch (error) {
//         console.error('Error al obtener los servicios:', error);
//       }
//     },
//     createTurnos: async (turno) => {
//       try {
//         const response = await axios.post('http://localhost:3001/turnos', servicio);
//         get().set([...get().turnos, response.data]);
//       } catch (error) {
//         console.error('Error al crear el servicio:', error);
//       }
//     },
//     updateTurno: async(id: string, turno: any) =>{
//       try {
//         await axios.put(`http://localhost:3001/turnos/${id}`, servicio);
//         const updatedTurnos = get().turnos.map((s) =>
//           s._id === id ? { ...s, ...turnos } : s
//         );
//         get().setTurnos(updatedTurnos);
//       } catch (error) {
//         console.error('Error al actualizar el servicio:', error);
//       }
//     },
//     deleteTurno: (id: string) =>{
//       try {
//         await axios.delete(`/api/servicios/${id}`);
//         const updatedTurnos = get().servicios.filter((s) => s._id !== id);
//         get().setServicios(updatedTurnos);
//       } catch (error) {
//         console.error('Error al eliminar el servicio:', error);
//       }
//     }
      
//   }));




import create from "zustand";
import { Shifts } from "../models/turnos";
import axios from "axios";

type State = {
  turnos: Shifts[];
  setTurnos: (turnos: Shifts[]) => void;
  fetchTurnos: () => Promise<void>;
  createTurno: (turno: Shifts) => Promise<void>;
  updateTurno: (_id: string, turno: Shifts) => Promise<void>;
  deleteTurno: (_id: string) => Promise<void>;
};

export const useTurnoStore = create<State>((set, get) => ({
  turnos: [],
  setTurnos: (turnos) => set({ turnos }),
  fetchTurnos: async () => {
    try {
      const response = await axios.get("http://localhost:3001/turnos");
      console.log(response.data);
      get().setTurnos(response.data);
    } catch (error) {
      console.error("Error al obtener los turnos:", error);
    }
  },
  createTurno: async (turno) => {
    try {
      const response = await axios.post("http://localhost:3001/turnos", turno);
      set((state) => ({ turnos: [...state.turnos, response.data] }));
    } catch (error) {
      console.error("Error al crear el turno:", error);
    }
  },
  updateTurno: async (id: string, turno: Shifts) => {
    try {
      await axios.put(`http://localhost:3001/turnos/${id}`, turno);
      const updatedTurnos = get().turnos.map((t) =>
        t._id === id ? { ...t, ...turno } : t
      );
      get().setTurnos(updatedTurnos);
    } catch (error) {
      console.error("Error al actualizar el turno:", error);
    }
  },
  deleteTurno: async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/turnos/${id}`);
      const updatedTurnos = get().turnos.filter((t) => t._id !== id);
      get().setTurnos(updatedTurnos);
    } catch (error) {
      console.error("Error al eliminar el turno:", error);
    }
  },
}));
