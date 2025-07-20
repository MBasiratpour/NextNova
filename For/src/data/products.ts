import { Product } from '../types';

export const drones: Product[] = [
  {
    id: 'dji-mini-3',
    name: 'DJI Mini 3',
    brand: 'DJI',
    price: 669,
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    category: 'drone',
    specifications: {
      'Flight Time': '38 minutes',
      'Max Range': '10 km',
      'Camera Resolution': '4K/30fps',
      'Weight': '249g',
      'Max Speed': '16 m/s'
    },
    features: [
      'Obstacle Avoidance',
      'ActiveTrack 4.0',
      'QuickShots',
      'Vertical Shooting',
      'True Vertical Shooting'
    ],
    description: 'Ultra-lightweight and foldable camera drone with 4K HDR video.'
  },
  {
    id: 'dji-air-2s',
    name: 'DJI Air 2S',
    brand: 'DJI',
    price: 999,
    image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    category: 'drone',
    specifications: {
      'Flight Time': '31 minutes',
      'Max Range': '12 km',
      'Camera Resolution': '5.4K/30fps',
      'Weight': '595g',
      'Max Speed': '19 m/s'
    },
    features: [
      'APAS 4.0',
      'MasterShots',
      'FocusTrack',
      'Point of Interest 3.0',
      'Waypoints 2.0'
    ],
    description: 'Professional drone with 1-inch CMOS sensor and intelligent features.'
  },
  {
    id: 'autel-evo-lite',
    name: 'Autel EVO Lite+',
    brand: 'Autel',
    price: 1199,
    image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    category: 'drone',
    specifications: {
      'Flight Time': '40 minutes',
      'Max Range': '9 km',
      'Camera Resolution': '6K/30fps',
      'Weight': '835g',
      'Max Speed': '15 m/s'
    },
    features: [
      'Dynamic Track 2.1',
      'Obstacle Avoidance',
      'SkyPortrait',
      'Moonlight Algorithm',
      'RYYB Color Filter'
    ],
    description: 'Advanced drone with superior low-light performance and extended flight time.'
  }
];

export const vrGlasses: Product[] = [
  {
    id: 'meta-quest-3',
    name: 'Meta Quest 3',
    brand: 'Meta',
    price: 499,
    image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    category: 'vr',
    specifications: {
      'Display Resolution': '2064 x 2208 per eye',
      'Refresh Rate': '90Hz',
      'Field of View': '110°',
      'Weight': '515g',
      'Storage': '128GB / 512GB'
    },
    features: [
      'Mixed Reality',
      'Hand Tracking',
      'Passthrough+',
      'Spatial Audio',
      'Wireless PC VR'
    ],
    description: 'Next-generation mixed reality headset with breakthrough performance.'
  },
  {
    id: 'pico-4',
    name: 'PICO 4',
    brand: 'ByteDance',
    price: 429,
    image: 'https://images.pexels.com/photos/7887807/pexels-photo-7887807.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    category: 'vr',
    specifications: {
      'Display Resolution': '2160 x 2160 per eye',
      'Refresh Rate': '90Hz',
      'Field of View': '105°',
      'Weight': '520g',
      'Storage': '128GB / 256GB'
    },
    features: [
      'Inside-Out Tracking',
      'Eye Tracking',
      'Pancake Lenses',
      'Wireless Streaming',
      'Full Body Tracking'
    ],
    description: 'All-in-one VR headset with pancake lenses and eye tracking technology.'
  },
  {
    id: 'valve-index',
    name: 'Valve Index',
    brand: 'Valve',
    price: 999,
    image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    category: 'vr',
    specifications: {
      'Display Resolution': '1440 x 1600 per eye',
      'Refresh Rate': '144Hz',
      'Field of View': '130°',
      'Weight': '809g',
      'Tracking': 'SteamVR 2.0'
    },
    features: [
      'Finger Tracking Controllers',
      'Off-Ear Audio',
      'Adjustable IPD',
      'Room-Scale VR',
      'Steam Integration'
    ],
    description: 'Premium PC VR system with industry-leading refresh rate and tracking.'
  }
];

export const allProducts: Product[] = [...drones, ...vrGlasses];