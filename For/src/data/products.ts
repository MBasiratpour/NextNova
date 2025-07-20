import { Product } from '../types';

export const drones: Product[] = [
  {
    id: 'dji-mavic-3',
    brand: 'DJI',
    name: 'DJI Mavic 3',
    model: 'Mavic 3',
    category: 'Consumer Drone',
    releaseDate: '2021-11-05',
    price: 2199,
    priceEUR: 2199,
    priceUSD: 2199,
    useCase: ['Photography', 'Videography', 'Professional'],
    description: 'Professional drone with Hasselblad camera and 46-minute flight time',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop',
    rating: 4.8,
    camera: '4K/120fps Hasselblad',
    batteryLife: '46 minutes',
    maxRange: '15 km',
    weight: '895g',
    sensors: ['GPS', 'GLONASS', 'Galileo', 'Vision Sensors', 'ToF Sensors'],
    storage: '8GB Internal + microSD',
    connectivity: ['Wi-Fi 6', 'OcuSync 3.0'],
    controllerType: 'DJI RC Pro',
    keyFeatures: [
      'Hasselblad Camera',
      '46min Flight Time',
      'Omnidirectional Obstacle Sensing',
      '15km Transmission Range',
      'ActiveTrack 5.0'
    ],
    osCompatibility: ['iOS 11.0+', 'Android 7.0+'],
    appSupport: ['DJI Fly', 'DJI Assistant 2'],
    accessories: [
      'Intelligent Flight Battery',
      'DJI RC Pro',
      'Gimbal Protector',
      'Propellers',
      'Carrying Case'
    ],
    specifications: {
      'Flight Time': '46 minutes',
      'Camera Resolution': '4K/120fps',
      'Weight': '895g',
      'Max Range': '15 km',
      'Max Speed': '19 m/s',
      'Operating Temperature': '-10°C to 40°C'
    },
    features: [
      'Hasselblad Camera',
      'Omnidirectional Obstacle Sensing',
      'ActiveTrack 5.0',
      '46min Flight Time',
      '15km Range'
    ]
  },
  {
    id: 'dji-air-2s',
    brand: 'DJI',
    name: 'DJI Air 2S',
    model: 'Air 2S',
    category: 'Consumer Drone',
    releaseDate: '2021-04-15',
    price: 999,
    priceEUR: 999,
    priceUSD: 999,
    useCase: ['Photography', 'Videography', 'Recreational'],
    description: 'Compact drone with 1-inch CMOS sensor and intelligent shooting modes',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=300&fit=crop',
    rating: 4.6,
    camera: '4K/60fps 1-inch CMOS',
    batteryLife: '31 minutes',
    maxRange: '12 km',
    weight: '595g',
    sensors: ['GPS', 'GLONASS', 'Vision Sensors', 'Downward ToF'],
    storage: 'microSD up to 256GB',
    connectivity: ['Wi-Fi', 'OcuSync 3.0'],
    controllerType: 'DJI RC-N1',
    keyFeatures: [
      '1-inch CMOS Sensor',
      '31min Flight Time',
      '4-Direction Obstacle Sensing',
      '12km Transmission Range',
      'MasterShots'
    ],
    osCompatibility: ['iOS 11.0+', 'Android 7.0+'],
    appSupport: ['DJI Fly'],
    accessories: [
      'Intelligent Flight Battery',
      'Remote Controller',
      'Gimbal Protector',
      'Propellers',
      'Carrying Bag'
    ],
    specifications: {
      'Flight Time': '31 minutes',
      'Camera Resolution': '4K/60fps',
      'Weight': '595g',
      'Max Range': '12 km',
      'Max Speed': '19 m/s',
      'Operating Temperature': '0°C to 40°C'
    },
    features: [
      '1-inch CMOS Sensor',
      '4-Direction Obstacle Sensing',
      'MasterShots',
      '31min Flight Time',
      '12km Range'
    ]
  },
  {
    id: 'dji-mini-3',
    brand: 'DJI',
    name: 'DJI Mini 3',
    model: 'Mini 3',
    category: 'Consumer Drone',
    releaseDate: '2022-05-10',
    price: 669,
    priceEUR: 669,
    priceUSD: 669,
    useCase: ['Recreational', 'Travel', 'Beginner'],
    description: 'Ultra-lightweight drone under 249g with 4K HDR video',
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500&h=300&fit=crop',
    rating: 4.4,
    camera: '4K/30fps HDR',
    batteryLife: '38 minutes',
    maxRange: '10 km',
    weight: '248g',
    sensors: ['GPS', 'GLONASS', 'Vision Sensors'],
    storage: 'microSD up to 256GB',
    connectivity: ['Wi-Fi', 'OcuSync 3.0'],
    controllerType: 'DJI RC-N1',
    keyFeatures: [
      'Under 249g',
      '38min Flight Time',
      '4K HDR Video',
      'True Vertical Shooting',
      'Level 5 Wind Resistance'
    ],
    osCompatibility: ['iOS 11.0+', 'Android 7.0+'],
    appSupport: ['DJI Fly'],
    accessories: [
      'Intelligent Flight Battery',
      'Remote Controller',
      'Propellers',
      'Gimbal Protector',
      'Carrying Case'
    ],
    specifications: {
      'Flight Time': '38 minutes',
      'Camera Resolution': '4K/30fps',
      'Weight': '248g',
      'Max Range': '10 km',
      'Max Speed': '16 m/s',
      'Operating Temperature': '0°C to 40°C'
    },
    features: [
      'Under 249g',
      'True Vertical Shooting',
      '4K HDR Video',
      '38min Flight Time',
      'Level 5 Wind Resistance'
    ]
  },
  {
    id: 'autel-evo-lite',
    brand: 'Autel',
    name: 'Autel EVO Lite+',
    model: 'EVO Lite+',
    category: 'Consumer Drone',
    releaseDate: '2022-01-20',
    price: 1199,
    priceEUR: 1199,
    priceUSD: 1199,
    useCase: ['Photography', 'Videography', 'Professional'],
    description: 'Professional drone with 1-inch CMOS sensor and 40-minute flight time',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
    rating: 4.3,
    camera: '4K/60fps 1-inch CMOS',
    batteryLife: '40 minutes',
    maxRange: '12 km',
    weight: '835g',
    sensors: ['GPS', 'GLONASS', 'Beidou', 'Vision Sensors', 'Sonar'],
    storage: 'microSD up to 512GB',
    connectivity: ['Wi-Fi', 'SkyLink 2.0'],
    controllerType: 'Autel Smart Controller V3',
    keyFeatures: [
      '1-inch CMOS Sensor',
      '40min Flight Time',
      '6K Photo Mode',
      'Moonlight Algorithm',
      'Dynamic Track 2.1'
    ],
    osCompatibility: ['iOS 11.0+', 'Android 8.0+'],
    appSupport: ['Autel Sky'],
    accessories: [
      'Intelligent Flight Battery',
      'Smart Controller V3',
      'Gimbal Cover',
      'Propellers',
      'Carrying Case'
    ],
    specifications: {
      'Flight Time': '40 minutes',
      'Camera Resolution': '4K/60fps',
      'Weight': '835g',
      'Max Range': '12 km',
      'Max Speed': '17 m/s',
      'Operating Temperature': '-10°C to 45°C'
    },
    features: [
      '1-inch CMOS Sensor',
      'Moonlight Algorithm',
      '6K Photo Mode',
      '40min Flight Time',
      'Dynamic Track 2.1'
    ]
  },
  {
    id: 'skydio-2-plus',
    brand: 'Skydio',
    name: 'Skydio 2+',
    model: '2+',
    category: 'Consumer Drone',
    releaseDate: '2021-03-01',
    price: 1099,
    priceEUR: 1099,
    priceUSD: 1099,
    useCase: ['Sports', 'Action', 'Autonomous Flight'],
    description: 'AI-powered autonomous drone with advanced obstacle avoidance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
    rating: 4.2,
    camera: '4K/60fps HDR',
    batteryLife: '27 minutes',
    maxRange: '6 km',
    weight: '775g',
    sensors: ['GPS', '6x 4K Navigation Cameras', 'IMU', 'Magnetometer'],
    storage: '64GB Internal',
    connectivity: ['Wi-Fi', 'Skydio Link'],
    controllerType: 'Skydio 2+ Controller',
    keyFeatures: [
      'Full 360° Obstacle Avoidance',
      'AI-Powered Tracking',
      '6x Navigation Cameras',
      'KeyFrame Flight Mode',
      'Cinema-Quality Stabilization'
    ],
    osCompatibility: ['iOS 12.0+', 'Android 8.0+'],
    appSupport: ['Skydio 2'],
    accessories: [
      'High-Capacity Battery',
      'Skydio 2+ Controller',
      'Propellers',
      'Carrying Case',
      'Beacon'
    ],
    specifications: {
      'Flight Time': '27 minutes',
      'Camera Resolution': '4K/60fps',
      'Weight': '775g',
      'Max Range': '6 km',
      'Max Speed': '15 m/s',
      'Operating Temperature': '0°C to 35°C'
    },
    features: [
      'Full 360° Obstacle Avoidance',
      'AI-Powered Tracking',
      'KeyFrame Flight Mode',
      '27min Flight Time',
      'Cinema-Quality Stabilization'
    ]
  }
];

export const vrGlasses: Product[] = [
  {
    id: 'meta-quest-3',
    brand: 'Meta',
    name: 'Meta Quest 3',
    model: 'Quest 3',
    category: 'Standalone VR',
    releaseDate: '2023-10-10',
    price: 499,
    priceEUR: 549,
    priceUSD: 499,
    useCase: ['Gaming', 'Entertainment', 'Fitness', 'Social'],
    description: 'Next-generation mixed reality headset with improved performance and passthrough',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=300&fit=crop',
    rating: 4.7,
    weight: '515g',
    storage: '128GB / 512GB',
    connectivity: ['Wi-Fi 6E', 'Bluetooth 5.2', 'USB-C'],
    controllerType: 'Touch Plus Controllers',
    keyFeatures: [
      'Mixed Reality Passthrough',
      'Snapdragon XR2 Gen 2',
      '4K+ Infinite Display',
      'Hand Tracking',
      'Wireless PC VR'
    ],
    osCompatibility: ['Standalone', 'PC VR (Windows 10/11)'],
    appSupport: ['Meta Store', 'SteamVR', 'Oculus Link'],
    accessories: [
      'Touch Plus Controllers',
      'Charging Cable',
      'Power Adapter',
      'Glasses Spacer',
      'Elite Strap (Optional)'
    ],
    specifications: {
      'Display Resolution': '2064 x 2208 per eye',
      'Refresh Rate': '72Hz, 80Hz, 90Hz, 120Hz',
      'Field of View': '110°',
      'Processor': 'Snapdragon XR2 Gen 2',
      'RAM': '8GB',
      'Storage': '128GB / 512GB',
      'Battery Life': '2.2 hours average',
      'IPD Range': '58-71mm'
    },
    features: [
      'Mixed Reality Passthrough',
      '4K+ Display',
      'Hand Tracking',
      'Wireless PC VR',
      'Snapdragon XR2 Gen 2'
    ]
  },
  {
    id: 'apple-vision-pro',
    brand: 'Apple',
    name: 'Apple Vision Pro',
    model: 'Vision Pro',
    category: 'Mixed Reality',
    releaseDate: '2024-02-02',
    price: 3499,
    priceEUR: 3999,
    priceUSD: 3499,
    useCase: ['Professional', 'Productivity', 'Entertainment', 'Development'],
    description: 'Revolutionary spatial computer with ultra-high resolution displays and advanced eye tracking',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&h=300&fit=crop',
    rating: 4.5,
    weight: '600-650g',
    storage: '256GB / 512GB / 1TB',
    connectivity: ['Wi-Fi 6E', 'Bluetooth 5.3', 'USB-C'],
    controllerType: 'Eye Tracking + Hand Gestures',
    keyFeatures: [
      'Micro-OLED Displays',
      'M2 + R1 Chips',
      'Eye Tracking',
      'Spatial Audio',
      'EyeSight Display'
    ],
    osCompatibility: ['visionOS'],
    appSupport: ['App Store', 'Compatible iOS/iPadOS Apps'],
    accessories: [
      'Dual Loop Band',
      'Solo Knit Band',
      'Light Seal',
      'Light Seal Cushion',
      'Polishing Cloth'
    ],
    specifications: {
      'Display Resolution': '3660 x 3200 per eye',
      'Refresh Rate': '90Hz, 96Hz, 100Hz',
      'Field of View': '120°',
      'Processor': 'M2 + R1',
      'RAM': '16GB',
      'Storage': '256GB / 512GB / 1TB',
      'Battery Life': '2 hours (external battery)',
      'IPD Range': 'Automatic adjustment'
    },
    features: [
      'Micro-OLED Displays',
      'Eye Tracking',
      'Spatial Audio',
      'EyeSight Display',
      'M2 + R1 Chips'
    ]
  },
  {
    id: 'pico-4-enterprise',
    brand: 'ByteDance',
    name: 'Pico 4 Enterprise',
    model: 'Pico 4 Enterprise',
    category: 'Enterprise VR',
    releaseDate: '2022-10-18',
    price: 899,
    priceEUR: 899,
    priceUSD: 899,
    useCase: ['Enterprise', 'Training', 'Education', 'Business'],
    description: 'Enterprise-focused VR headset with advanced management features and high-resolution displays',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&h=300&fit=crop',
    rating: 4.3,
    weight: '586g',
    storage: '256GB',
    connectivity: ['Wi-Fi 6', 'Bluetooth 5.1', 'USB-C'],
    controllerType: 'Pico Neo 3 Controllers',
    keyFeatures: [
      'Enterprise Management',
      'Pancake Lenses',
      'Face/Eye Tracking Ready',
      'Wireless Streaming',
      'Business Applications'
    ],
    osCompatibility: ['PicoOS', 'PC VR (Windows)'],
    appSupport: ['Pico Store', 'Enterprise Apps', 'SteamVR'],
    accessories: [
      'Pico Neo 3 Controllers',
      'Head Strap',
      'Charging Cable',
      'Cleaning Cloth',
      'Enterprise Kit'
    ],
    specifications: {
      'Display Resolution': '2160 x 2160 per eye',
      'Refresh Rate': '72Hz, 90Hz',
      'Field of View': '105°',
      'Processor': 'Snapdragon XR2 Gen 1',
      'RAM': '8GB',
      'Storage': '256GB',
      'Battery Life': '2.5 hours',
      'IPD Range': '62-72mm'
    },
    features: [
      'Enterprise Management',
      'Pancake Lenses',
      'Face/Eye Tracking Ready',
      'Wireless Streaming',
      'Business Applications'
    ]
  },
  {
    id: 'htc-vive-pro-2',
    brand: 'HTC',
    name: 'HTC Vive Pro 2',
    model: 'Vive Pro 2',
    category: 'PC VR',
    releaseDate: '2021-06-04',
    price: 1399,
    priceEUR: 1399,
    priceUSD: 1399,
    useCase: ['Professional', 'Gaming', 'Simulation', 'Development'],
    description: 'High-end PC VR headset with 5K resolution and precise tracking',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=500&h=300&fit=crop',
    rating: 4.4,
    weight: '850g',
    storage: 'N/A (PC Connected)',
    connectivity: ['DisplayPort 1.2', 'USB 3.0', 'Bluetooth'],
    controllerType: 'Vive Controllers 3.0',
    keyFeatures: [
      '5K Resolution',
      'SteamVR Tracking 2.0',
      'Adjustable IPD',
      'Premium Audio',
      'Modular Design'
    ],
    osCompatibility: ['Windows 10/11', 'SteamVR'],
    appSupport: ['SteamVR', 'Viveport', 'OpenXR'],
    accessories: [
      'Vive Controllers 3.0',
      'Base Stations 2.0',
      'Link Box',
      'Cables',
      'Face Cushion'
    ],
    specifications: {
      'Display Resolution': '2448 x 2448 per eye',
      'Refresh Rate': '90Hz, 120Hz',
      'Field of View': '120°',
      'Processor': 'PC Required',
      'RAM': 'PC Dependent',
      'Storage': 'PC Dependent',
      'Battery Life': 'Wired (No Battery)',
      'IPD Range': '57-72mm'
    },
    features: [
      '5K Resolution',
      'SteamVR Tracking 2.0',
      'Adjustable IPD',
      'Premium Audio',
      'Modular Design'
    ]
  },
  {
    id: 'valve-index',
    brand: 'Valve',
    name: 'Valve Index',
    model: 'Index',
    category: 'PC VR',
    releaseDate: '2019-06-28',
    price: 999,
    priceEUR: 1079,
    priceUSD: 999,
    useCase: ['Gaming', 'Simulation', 'Development', 'Enthusiast'],
    description: 'Premium PC VR system with finger tracking controllers and high refresh rate',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&h=300&fit=crop',
    rating: 4.6,
    weight: '809g',
    storage: 'N/A (PC Connected)',
    connectivity: ['DisplayPort 1.2', 'USB 3.0'],
    controllerType: 'Index Controllers (Knuckles)',
    keyFeatures: [
      'Finger Tracking',
      '144Hz Refresh Rate',
      'Off-Ear Audio',
      'Adjustable IPD',
      'SteamVR Tracking 2.0'
    ],
    osCompatibility: ['Windows 10/11', 'Linux (Beta)', 'SteamVR'],
    appSupport: ['SteamVR', 'OpenXR'],
    accessories: [
      'Index Controllers',
      'Base Stations 2.0',
      'Cables',
      'Face Gasket',
      'Cleaning Cloth'
    ],
    specifications: {
      'Display Resolution': '1440 x 1600 per eye',
      'Refresh Rate': '80Hz, 90Hz, 120Hz, 144Hz',
      'Field of View': '130°',
      'Processor': 'PC Required',
      'RAM': 'PC Dependent',
      'Storage': 'PC Dependent',
      'Battery Life': 'Wired (No Battery)',
      'IPD Range': '58-70mm'
    },
    features: [
      'Finger Tracking',
      '144Hz Refresh Rate',
      'Off-Ear Audio',
      'Adjustable IPD',
      'SteamVR Tracking 2.0'
    ]
  }
];

export const allProducts: Product[] = [...drones, ...vrGlasses];