export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'coffee' | 'pastry' | 'beverage'
}

export interface Review {
  id: string
  author: string
  content: string
  rating: number
  date: string
}