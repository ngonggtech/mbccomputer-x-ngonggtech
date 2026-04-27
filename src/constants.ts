import { Game, Component, PrebuiltPC } from './types';

export const INDIE_GAMES: Game[] = [
  {
    id: 'hades',
    title: 'Hades',
    description: 'Một tựa game nhập vai hành động thu thập hầm ngục phong cách thần thánh từ Supergiant Games. Lối chơi hành động nhịp độ cao với cốt truyện tuyệt vời.',
    genre: 'Hành động Rogue-like',
    rating: '10/10',
    image: 'https://images.unsplash.com/photo-1614027164847-1b2809eb189d?q=80&w=800&auto=format&fit=crop',
    tags: ['Tuyệt tác', 'Chơi lại nhiều', 'Cốt truyện hay']
  },
  {
    id: 'hollow-knight',
    title: 'Hollow Knight',
    description: 'Tự tạo ra con đường của bạn trong Hollow Knight! Cuộc phiêu lưu hành động sử thi qua một vương quốc côn trùng và anh hùng điêu tàn rộng lớn.',
    genre: 'Metroidvania',
    rating: '9.5/10',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252723f?q=80&w=800&auto=format&fit=crop',
    tags: ['Bầu không khí', 'Độ khó cao', 'Khám phá']
  },
  {
    id: 'celeste',
    title: 'Celeste',
    description: 'Giúp Madeline vượt qua những con quỷ nội tâm trên hành trình lên đỉnh núi Celeste, trong tựa game đi cảnh siêu chặt chẽ này.',
    genre: 'Đi cảnh',
    rating: '9.7/10',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    tags: ['Cảm xúc', 'Chuẩn xác', 'Nhạc cực hay']
  },
  {
    id: 'dead-cells',
    title: 'Dead Cells',
    description: 'Khám phá một lâu đài thay đổi liên tục... miễn là bạn có thể chiến đấu vượt qua những người canh gác với lối chơi 2D souls-lite.',
    genre: 'Hành động Rogue-lite',
    rating: '9.2/10',
    image: 'https://images.unsplash.com/photo-1552824801-081ba798670d?q=80&w=800&auto=format&fit=crop',
    tags: ['Chiến đấu', 'Tốc độ', 'Mở khóa đồ']
  },
  {
    id: 'stardew',
    title: 'Stardew Valley',
    description: 'Bạn được thừa kế trang trại cũ của người ông ở thung lũng Stardew. Với vài món công cụ cũ rích và vài đồng xu, bạn bắt đầu cuộc sống mới.',
    genre: 'Mô phỏng',
    rating: '9.9/10',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    tags: ['Thư giãn', 'Trồng trọt', 'Kinh điển']
  }
];

export const PREBUILT_PCS: PrebuiltPC[] = [
  {
    id: 'neon-nova',
    name: 'Neon Nova X',
    specs: 'Intel i9-14900K | RTX 4090 | 64GB DDR5 | 4TB NVMe',
    price: 97490000,
    image: 'https://i.ibb.co/DD0pGBW8/1.png'
  },
  {
    id: 'cyber-pulse',
    name: 'Cyber Pulse Pro',
    specs: 'Ryzen 7 7800X3D | RTX 4080 Super | 32GB DDR5 | 2TB NVMe',
    price: 62490000,
    image: 'https://i.ibb.co/fGrrjhSp/2.png'
  },
  {
    id: 'synth-wave',
    name: 'SynthWave Core',
    specs: 'Intel i5-13600K | RTX 4070 Ti | 32GB DDR5 | 1TB NVMe',
    price: 44990000,
    image: 'https://i.ibb.co/kg8bvrMC/3.png'
  },
  {
    id: 'glitch-mini',
    name: 'Glitch Mini-ITX',
    specs: 'Ryzen 5 7600X | RTX 4060 Ti | 32GB DDR5 | 1TB NVMe',
    price: 32490000,
    image: 'https://i.ibb.co/zhGRHfQv/4.png'
  },
  {
    id: 'quantum-strike',
    name: 'Quantum Strike X',
    specs: 'Intel i7-14700K | RTX 4080 | 32GB DDR5 | 2TB NVMe',
    price: 58500000,
    image: 'https://i.ibb.co/KxTNw9RH/5.png'
  },
  {
    id: 'nebula-forge',
    name: 'Nebula Forge 9',
    specs: 'Ryzen 9 7950X | RX 7900 XTX | 64GB DDR5 | 2TB NVMe',
    price: 61990000,
    image: 'https://i.ibb.co/rGq25n2b/6.png'
  },
  {
    id: 'plasma-stealth',
    name: 'Plasma Stealth',
    specs: 'Intel i5-14600KF | RTX 4070 SUPER | 32GB DDR5 | 1TB NVMe',
    price: 38900000,
    image: 'https://i.ibb.co/21bfx85r/7.png'
  },
  {
    id: 'void-walker',
    name: 'Void Walker',
    specs: 'Ryzen 5 7600 | RX 7800 XT | 32GB DDR5 | 1TB NVMe',
    price: 29500000,
    image: 'https://i.ibb.co/Z6gCTCjs/8.png'
  }
];

export const COMPONENTS: Component[] = [
  // CPUs
  {
    id: 'i9-14900k',
    name: 'Intel Core i9-14900K',
    type: 'CPU',
    specs: '24 Cores, 32 Threads, up to 6.0 GHz',
    price: 14600000,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7800x3d',
    name: 'AMD Ryzen 7 7800X3D',
    type: 'CPU',
    specs: '8 Cores, 16 Threads, 3D V-Cache',
    price: 9900000,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'i3-12100f',
    name: 'Intel Core i3-12100F',
    type: 'CPU',
    specs: '4 Cores, 8 Threads, up to 4.3 GHz',
    price: 1750000,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'i5-12400f',
    name: 'Intel Core i5-12400F',
    type: 'CPU',
    specs: '6 Cores, 12 Threads, up to 4.4 GHz',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'i5-13400f',
    name: 'Intel Core i5-13400F',
    type: 'CPU',
    specs: '10 Cores, 16 Threads, up to 4.6 GHz',
    price: 5200000,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'i5-14600f',
    name: 'Intel Core i5-14600F',
    type: 'CPU',
    specs: '14 Cores, 20 Threads, up to 5.2 GHz',
    price: 6500000,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'i5-14600kf',
    name: 'Intel Core i5-14600KF',
    type: 'CPU',
    specs: '14 Cores, 20 Threads, Unlocked, up to 5.3 GHz',
    price: 7600000,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'i7-14700kf',
    name: 'Intel Core i7-14700KF',
    type: 'CPU',
    specs: '20 Cores, 28 Threads, Unlocked, up to 5.6 GHz',
    price: 10200000,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop'
  },
  // GPUs
  {
    id: 'rtx-4090',
    name: 'NVIDIA RTX 4090 FE',
    type: 'GPU',
    specs: '24GB GDDR6X, Ada Lovelace Architecture',
    price: 49990000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rx-7900-xtx',
    name: 'AMD Radeon RX 7900 XTX',
    type: 'GPU',
    specs: '24GB GDDR6, RDNA 3',
    price: 24990000,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gtx-1660-super',
    name: 'NVIDIA GTX 1660 Super',
    type: 'GPU',
    specs: '6GB GDDR6, Turing Architecture',
    price: 4200000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rtx-2060',
    name: 'NVIDIA RTX 2060',
    type: 'GPU',
    specs: '6GB GDDR6, Ray Tracing, DLSS',
    price: 5400000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rtx-3050',
    name: 'NVIDIA RTX 3050',
    type: 'GPU',
    specs: '8GB GDDR6, Ampere Architecture',
    price: 5800000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rtx-3060',
    name: 'NVIDIA RTX 3060',
    type: 'GPU',
    specs: '12GB GDDR6, Ampere Architecture',
    price: 7500000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rtx-5060',
    name: 'NVIDIA RTX 5060',
    type: 'GPU',
    specs: '12GB GDDR7, Blackwell Architecture',
    price: 12500000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rtx-5090',
    name: 'NVIDIA RTX 5090',
    type: 'GPU',
    specs: '32GB GDDR7, Blackwell Architecture',
    price: 65000000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rtx-5090-lightning',
    name: 'MSI RTX 5090 Lightning Z',
    type: 'GPU',
    specs: '32GB GDDR7, Ultimate Overclocking, Tri-Frozr',
    price: 79990000,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop'
  },
  // Motherboards
  {
    id: 'z790-hero',
    name: 'ASUS ROG Maximus Z790 Hero',
    type: 'Motherboard',
    specs: 'LGA 1700, DDR5, PCIe 5.0, Wi-Fi 6E',
    price: 12500000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'x670e-aorus',
    name: 'Gigabyte X670E AORUS Master',
    type: 'Motherboard',
    specs: 'AM5, DDR5, PCIe 5.0, Wi-Fi 6E',
    price: 10990000,
    image: 'https://images.unsplash.com/photo-1620283085068-5a2f81cedc9f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'h610m',
    name: 'MSI PRO H610M-B DDR4',
    type: 'Motherboard',
    specs: 'LGA 1700, DDR4, M.2',
    price: 1850000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b760m-tuf',
    name: 'ASUS TUF GAMING B760M-PLUS',
    type: 'Motherboard',
    specs: 'LGA 1700, DDR5, PCIe 5.0',
    price: 4500000,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  // RAM
  {
    id: 'dominator-titanium-64',
    name: 'Corsair Dominator Titanium 64GB',
    type: 'RAM',
    specs: '2x32GB, DDR5-6000, CL30',
    price: 7500000,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'trident-z5-32',
    name: 'G.Skill Trident Z5 RGB 32GB',
    type: 'RAM',
    specs: '2x16GB, DDR5-6400, CL32',
    price: 3600000,
    image: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fury-beast-16-d4',
    name: 'Kingston FURY Beast 16GB DDR4',
    type: 'RAM',
    specs: '2x8GB, DDR4-3200, CL16',
    price: 1100000,
    image: 'https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fury-beast-32-d5',
    name: 'Kingston FURY Beast 32GB DDR5',
    type: 'RAM',
    specs: '2x16GB, DDR5-5200, CL40',
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=800&auto=format&fit=crop'
  },
  // Storage
  {
    id: '990-pro-4tb',
    name: 'Samsung 990 PRO 4TB',
    type: 'Storage',
    specs: 'NVMe M.2 PCIe 4.0, up to 7450 MB/s',
    price: 8900000,
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2636?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'kc3000-1tb',
    name: 'Kingston KC3000 1TB',
    type: 'Storage',
    specs: 'NVMe M.2 PCIe 4.0, up to 7000 MB/s',
    price: 2300000,
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2636?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sn580-500',
    name: 'WD Blue SN580 500GB',
    type: 'Storage',
    specs: 'NVMe M.2 PCIe 4.0, up to 4000 MB/s',
    price: 1050000,
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2636?q=80&w=800&auto=format&fit=crop'
  },
  // PSU
  {
    id: 'ax1600i',
    name: 'Corsair AX1600i',
    type: 'PSU',
    specs: '1600W, 80+ Titanium, Fully Modular',
    price: 15500000,
    image: 'https://images.unsplash.com/photo-1587202372585-cd278cc0a33c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rm850x',
    name: 'Corsair RM850x',
    type: 'PSU',
    specs: '850W, 80+ Gold, Fully Modular',
    price: 3600000,
    image: 'https://images.unsplash.com/photo-1587202372585-cd278cc0a33c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cv650',
    name: 'Corsair CV650',
    type: 'PSU',
    specs: '650W, 80+ Bronze, Non-Modular',
    price: 1550000,
    image: 'https://images.unsplash.com/photo-1587202372585-cd278cc0a33c?q=80&w=800&auto=format&fit=crop'
  },
  // Case
  {
    id: 'o11-dynamic',
    name: 'Lian Li O11 Dynamic EVO XL',
    type: 'Case',
    specs: 'Full Tower, Dual Chamber, Tempered Glass',
    price: 5200000,
    image: 'https://images.unsplash.com/photo-1555617105-04e386ccf7d0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'h5-flow',
    name: 'NZXT H5 Flow RGB',
    type: 'Case',
    specs: 'Mid Tower, High Airflow, Glass Panel',
    price: 2600000,
    image: 'https://images.unsplash.com/photo-1555617105-04e386ccf7d0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'aquarius-plus',
    name: 'Xigmatek Aquarius Plus',
    type: 'Case',
    specs: 'Mid Tower, Panoramic Glass',
    price: 1850000,
    image: 'https://images.unsplash.com/photo-1555617105-04e386ccf7d0?q=80&w=800&auto=format&fit=crop'
  }
];
