export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  category: 'drone' | 'vr';
  specifications: Record<string, string | number>;
  features: string[];
  description: string;
}

export interface ComparisonItem {
  product: Product;
  selected: boolean;
}