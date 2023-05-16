import create from 'zustand';
import { Profile } from '../models/perfile';

interface ProfileStore {
  profile: Profile;
  updateProfile: (profile: Profile) => void;
}


export const profileStore = create<ProfileStore>((set) => ({
  profile: {
    name: 'Angel Orona',
    bio: "Soy un peluquero profesional y apasionado por mi trabajo. Desde muy joven descubrí mi vocación por la estilismo y he estado trabajando en el mundo de la peluquería desde hace más de 10 años. A lo largo de mi carrera, he tenido la oportunidad de trabajar con clientes de todo tipo, cada uno con sus necesidades y preferencias únicas. Para mí, lo más importante es siempre escuchar y entender lo que mis clientes buscan, para poder brindarles un servicio personalizado y de alta calidad.Además de ser un estilista creativo y talentoso, también me considero una persona responsable y profesional. Me tomo muy en serio mi trabajo y siempre estoy buscando maneras de mejorar y estar al día con las últimas tendencias y técnicas en el mundo de la peluquería.Si estás buscando un estilista que te brinde un servicio personalizado y de alta calidad, no dudes en ponerte en contacto conmigo. Estoy seguro de que juntos podemos encontrar el look perfecto para ti.",
    email: 'angel@gmail.com',
    phone: '555-1234',
  },
  updateProfile: (profile: Profile) => set((state) => ({ profile })),
}));