import { ReactNode } from "react";

export interface Service {
    nombre: ReactNode;
    id: string | number | readonly string[] | undefined;
    _id: string;
    name: string;
    duration: string;
    description:string;
    price: number;
    image: {
      secure_url: string;
    };
  }

  
  
  