export interface Shifts {
    _id: string;
    servicio: string;
    cliente: string;
    fecha: Date;
    hora:Date,
    estado:'disponible' | 'reservado' | 'cancelado';
    precio:number
  }