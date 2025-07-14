export interface Drink {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

export interface CartItem {
  drink: Drink;
  quantity: number;
}
