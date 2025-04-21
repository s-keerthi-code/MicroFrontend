interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}
interface CartStore {
  cart: Product[];
  promocode: string;
  discount: number;
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  applyPromoCode: () => void;
}

export type { CartStore, Product };