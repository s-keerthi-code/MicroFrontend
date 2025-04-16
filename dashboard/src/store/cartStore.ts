import { createStore } from 'zustand/vanilla';

export const cartStore = createStore((set) => ({
  cart: [],
  promocode: '',
  discount: 0,

  addToCart: (item: any) =>
    set((state: any) => ({
      cart: [...state.cart, item],
    })),

  removeFromCart: (id: number) =>
    set((state: any) => ({
      cart: state.cart.filter((item: any) => item.id !== id),
    })),
  
    applyPromoCode: () => {
      const state = cartStore.getState();
      const totalAmount = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
      let discount = 0;
    
      if (totalAmount > 50000) {
        discount = totalAmount * 0.20;
      } else if (totalAmount > 10000) {
        discount = totalAmount * 0.15;
      } else if (totalAmount > 5000) {
        discount = totalAmount * 0.10;
      } else if (totalAmount >= 200) {
        discount = totalAmount * 0.05;
      }
    
      set({ promoCode: `SAVE${discount}`, discount: Math.round(discount) });
    }
    
}));
