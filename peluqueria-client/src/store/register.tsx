import create from 'zustand';
import {State} from "../models/register"


export const useStore = create<State>((set) => ({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    isLoading: false,
    error: '',
    setField: (field, value) => set((state) => ({ ...state, [field]: value })),
    registerUser: async () => {
      set({ isLoading: true, error: '' });
  
      try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: useStore.getState().fullName,
            email: useStore.getState().email,
            phone: useStore.getState().phone,
            password: useStore.getState().password,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Error al enviar la solicitud');
        }
  
        console.log('Registro exitoso');
      } catch (error) {
        console.log(error)
      } finally {
        set({ isLoading: false });
      }
    },
  }));


// store.ts
// import create from 'zustand';
// import axios from 'axios';

// type User = {
//   id: number;
//   fullName: string;
//   email: string;
//   phone: string;
//   password: string;
// };

// type State = {
//   users: User[];
//   isLoading: boolean;
//   error: string;
//   getUsers: () => Promise<void>;
//   getUserById: (id: number) => Promise<User>;
//   createUser: (user: User) => Promise<void>;
//   updateUser: (id: number, user: User) => Promise<void>;
//   deleteUser: (id: number) => Promise<void>;
// };

// export const useStore = create<State>((set) => ({
//   users: [],
//   isLoading: false,
//   error: '',
//   getUsers: async () => {
//     set({ isLoading: true, error: '' });

//     try {
//       const response = await axios.get<User[]>('http://localhost:3001/users');
//       set({ users: response.data });
//     } catch (error) {
//       set({ error: error.message });
//     } finally {
//       set({ isLoading: false });
//     }
//   },
//   getUserById: async (id) => {
//     set({ isLoading: true, error: '' });

//     try {
//       const response = await axios.get<User>(`http://localhost:3001/users/${id}`);
//       return response.data;
//     } catch (error) {
//       set({ error: error.message });
//     } finally {
//       set({ isLoading: false });
//     }
//   },
//   createUser: async (user) => {
//     set({ isLoading: true, error: '' });

//     try {
//       await axios.post('http://localhost:3001/users', user);
//       set((state) => ({ users: [...state.users, user] }));
//     } catch (error) {
//       set({ error: error.message });
//     } finally {
//       set({ isLoading: false });
//     }
//   },
//   updateUser: async (id, user) => {
//     set({ isLoading: true, error: '' });

//     try {
//       await axios.put(`http://localhost:3001/users/${id}`, user);
//       set((state) => ({
//         users: state.users.map((u) => (u.id === id ? { ...u, ...user } : u)),
//       }));
//     } catch (error) {
//       set({ error: error.message });
//     } finally {
//       set({ isLoading: false });
//     }
//   },
//   deleteUser: async (id) => {
//     set({ isLoading: true, error: '' });

//     try {
//       await axios.delete(`http://localhost:3001/users/${id}`);
//       set((state) => ({ users: state.users.filter((u) => u.id !== id) }));
//     } catch (error) {
//       set({ error: error.message });
//     } finally {
//       set({ isLoading: false });
//     }
//   },
// }));
