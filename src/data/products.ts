export type Product = {
  id: string;
  name: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  category: string[];
  features: string[];
};

export const products: Product[] = [
  {
    id: 'classic-black-frame',
    name: 'Classic Black Frame',
    type: 'Optical Frame',
    price: 120,
    rating: 4.8,
    reviews: 120,
    image: '/glasses-man.jpg',
    description: 'A timeless classic black frame suitable for any professional or casual setting. Designed for comfort and durability.',
    category: ['Men', 'Women', 'All', 'Premium'],
    features: ['Lightweight acetate', 'Spring hinges', 'Anti-reflective coating compatible', '1 Year Warranty']
  },
  {
    id: 'modern-metal-frame',
    name: 'Modern Metal Frame',
    type: 'Optical Frame',
    price: 140,
    rating: 4.7,
    reviews: 95,
    image: '/glasses-man.jpg',
    description: 'Sleek and minimalistic metal frame that brings a modern touch to your everyday look.',
    category: ['Men', 'All', 'New Arrivals'],
    features: ['Titanium build', 'Adjustable nose pads', 'Ultra-lightweight', 'Scratch-resistant finish']
  },
  {
    id: 'luxury-square',
    name: 'Luxury Square',
    type: 'Premium Frame',
    price: 160,
    rating: 4.9,
    reviews: 86,
    image: '/glasses-man.jpg',
    description: 'Bold square frames crafted from premium materials. Stand out with confidence.',
    category: ['Women', 'All', 'Premium'],
    features: ['Hand-polished acetate', 'Wide fit', 'Premium carrying case included', 'UV400 protection compatible']
  },
  {
    id: 'classic-aviator',
    name: 'Classic Aviator',
    type: 'Sunglasses',
    price: 150,
    rating: 4.8,
    reviews: 110,
    image: '/glasses-man.jpg',
    description: 'Iconic aviator sunglasses that never go out of style. Perfect for driving and outdoor activities.',
    category: ['Sunglasses', 'Men', 'All'],
    features: ['Polarized lenses', '100% UV Protection', 'Classic teardrop shape', 'Double bridge design']
  },
  {
    id: 'elegant-cat-eye',
    name: 'Elegant Cat Eye',
    type: 'Optical Frame',
    price: 135,
    rating: 4.6,
    reviews: 64,
    image: '/glasses-man.jpg',
    description: 'Sophisticated cat-eye frames that add a touch of vintage glamour to your wardrobe.',
    category: ['Women', 'All', 'New Arrivals'],
    features: ['Vintage design', 'Comfort-fit bridge', 'Durable hinges', 'Available in multiple colors']
  },
  {
    id: 'sport-wrap-sunglasses',
    name: 'Sport Wrap Sunglasses',
    type: 'Sunglasses',
    price: 110,
    rating: 4.5,
    reviews: 42,
    image: '/glasses-man.jpg',
    description: 'High-performance wraparound sunglasses designed for active lifestyles and maximum coverage.',
    category: ['Sunglasses', 'Men', 'All'],
    features: ['Wraparound fit', 'Impact-resistant lenses', 'Rubber grips', 'Hydrophobic coating']
  }
];
