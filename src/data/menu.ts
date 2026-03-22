import type { MenuItem } from '@/types'

export const menuItems = [
  {
    id: '1',
    name: 'Single Origin Espresso',
    description: 'Bold, rich espresso from ethically sourced Ethiopian beans',
    price: 3.50,
    category: 'coffee',
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Perfect balance of espresso, steamed milk, and foam',
    price: 4.50,
    category: 'coffee',
  },
  {
    id: '3',
    name: 'Flat White',
    description: 'Creamy microfoam with double espresso shots',
    price: 4.75,
    category: 'coffee',
  },
  {
    id: '4',
    name: 'Americano',
    description: 'Classic espresso diluted with hot water',
    price: 3.75,
    category: 'coffee',
  },
  {
    id: '5',
    name: 'Latte',
    description: 'Smooth espresso with steamed milk and light foam',
    price: 4.50,
    category: 'coffee',
  },
  {
    id: '6',
    name: 'Macchiato',
    description: 'Espresso topped with a dash of foam',
    price: 3.50,
    category: 'coffee',
  },
  {
    id: '7',
    name: 'Almond Croissant',
    description: 'Buttery, flaky pastry with sliced almonds',
    price: 4.50,
    category: 'pastry',
  },
  {
    id: '8',
    name: 'Chocolate Pain au Chocolat',
    description: 'Warm, layered pastry with dark chocolate',
    price: 5.00,
    category: 'pastry',
  },
  {
    id: '9',
    name: 'Blueberry Muffin',
    description: 'Fresh blueberry muffin baked daily',
    price: 4.00,
    category: 'pastry',
  },
] satisfies MenuItem[]