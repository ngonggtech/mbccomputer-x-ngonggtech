export interface Game {
  id: string;
  title: string;
  description: string;
  genre: string;
  rating: string;
  image: string;
  tags: string[];
  trailerUrl?: string;
}

export interface Component {
  id: string;
  name: string;
  type: 'CPU' | 'GPU' | 'Motherboard' | 'RAM' | 'Storage' | 'PSU' | 'Case';
  specs: string;
  price: number;
  image: string;
}

export interface PrebuiltPC {
  id: string;
  name: string;
  specs: string;
  price: number;
  image: string;
}
