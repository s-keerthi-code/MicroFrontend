import { createStore } from 'zustand/vanilla';
import { Product, CartStore } from '../commonInterfaces';



export const cartStore = createStore<CartStore>((set) => ({
  cart: [],
  promocode: '',
  discount: 0,

  addToCart: (item: Product) => {
    set((state: CartStore) => {
      const existingItem = state.cart.find((cartItem: Product) => cartItem.id === item.id);

      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((cartItem: Product) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        updatedCart = [...state.cart, { ...item, quantity: 1 }];
      }

      return { cart: updatedCart };
    })
    cartStore?.getState().applyPromoCode();
  },

  removeFromCart: (id: number) =>
    set((state: CartStore) => ({
      cart: state.cart.filter((item: Product) => item.id !== id),
  })),

  applyPromoCode: () => {
    const state: CartStore = cartStore?.getState();

    // Find the item in the cart with the highest value (price * quantity)
    const maxValueItem = state.cart.reduce((maxItem: Product, currentItem: Product) => {
      const currentValue = currentItem.price * currentItem.quantity;
      const maxValue = maxItem.price * maxItem.quantity;
      return currentValue > maxValue ? currentItem : maxItem;
    }, state.cart[0]);

    const itemValue = maxValueItem?.price * maxValueItem?.quantity || 0;

    let priceDis = 0;

    if (itemValue > 10000) {
      priceDis = itemValue * 0.15;
    } else if (itemValue > 5000) {
      priceDis = itemValue * 0.10;
    } else if (itemValue >= 200) {
      priceDis = itemValue * 0.05;
    }

    set((state: CartStore) => ({
      ...state,
      promocode: `SAVE${Math.round(priceDis)}`,
      discount: Math.round(priceDis),
    }));
  },

}));
