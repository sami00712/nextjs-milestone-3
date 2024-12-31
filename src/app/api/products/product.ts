import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/types';
const products :Product[]= [
  { id: 1, name: 'Elegant Watch', price: 199.99, image: '/products/watch.jpg', description: 'A stylish watch for any occasion', color: 'Golden', reviews: 4.5 },
  { id: 2, name: 'Leather Bag', price: 89.99, image: '/products/bag.jpg', description: 'High-quality leather bag', color: 'Brown', reviews: 4.2 },
  { id: 3, name: 'Wireless Earbuds', price: 129.99, image: '/products/earbuds.jpg', description: 'Crystal clear sound with long battery life', color: 'Black', reviews: 4.7 },
  { id: 4, name: 'Sunglasses', price: 59.99, image: '/products/sunglases.jpg', description: 'Protect your eyes in style', color: 'Black', reviews: 4.0 },
  { id: 5, name: 'Running Shoes', price: 79.99, image: '/products/shoes.jpg', description: 'Comfortable shoes for your daily run', color: 'White', reviews: 4.6 },
  { id: 6, name: 'Coffee Maker', price: 99.99, image: '/products/coffeemaker.jpg', description: 'Makes delicious coffee', color: 'Black', reviews: 4.3 },
  { id: 7, name: 'Blender', price: 79.99, image: '/products/blender.jpg', description: 'Powerful blender for smoothies', color: 'White', reviews: 4.8 },
  { id: 8, name: 'Toaster', price: 49.99, image: '/products/toaster.jpg', description: 'Two-slice toaster', color: 'Silver', reviews: 4.1 },
  { id: 9, name: 'Microwave', price: 69.99, image: '/products/microwave.jpg', description: 'Compact microwave', color: 'Black', reviews: 4.4 },
  { id: 10, name: 'Kettle', price: 39.99, image: '/products/kettle.jpg', description: 'Fast boiling kettle', color: 'White', reviews: 4.6 },
  { id: 11, name: 'Hair Dryer', price: 29.99, image: '/products/hairdyer.jpg', description: 'Powerful hair dryer', color: 'Black', reviews: 4.2 },
  { id: 12, name: 'Straightener', price: 49.99, image: '/products/straightener.jpg', description: 'Hair straightener', color: 'Pink', reviews: 4.5 },
  { id: 13, name: 'Curling Iron', price: 59.99, image: '/products/curlingiron.jpg', description: 'Curling iron', color: 'White', reviews: 4.3 },
  { id: 14, name: 'Electric Toothbrush', price: 29.99, image: '/products/teeth.jpg', description: 'Electric toothbrush', color: 'Blue', reviews: 4.7 },
  { id: 15, name: 'Shaver', price: 39.99, image: '/products/shaver.jpg', description: 'Electric shaver', color: 'Black', reviews: 4.4 },
  { id: 16, name: 'Laptop', price: 999.99, image: '/products/laptop.jpg', description: 'High-performance laptop', color: 'Silver', reviews: 4.9 },
  { id: 17, name: 'Smartphone', price: 499.99, image: '/products/smartphone.jpg', description: 'Latest model smartphone', color: 'Black', reviews: 4.6 },
  { id: 18, name: 'Headphones', price: 99.99, image: '/products/headphones.jpg', description: 'Noise-cancelling headphones', color: 'Black', reviews: 4.8 },
  { id: 19, name: 'Tablet', price: 399.99, image: '/products/tablet.jpg', description: 'High-resolution tablet', color: 'Black', reviews: 4.5 },
  { id: 20, name: 'Smartwatch', price: 149.99, image: '/products/smartwatch.jpg', description: 'Fitness tracker smartwatch', color: 'Black', reviews: 4.7 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}

