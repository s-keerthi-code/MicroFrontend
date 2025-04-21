import { create } from 'zustand';

export const useAccountStore = create((set) => ({
  email: 'Remyjohn@example.com',
  plan: 'Premium',
  lastLogin: '2025-04-01',
  theme: 'light',
  showModal: false,
  themePref: 'Light',
  orders : [
    {
      id: 'ORD123',
      item: 'Wireless Mouse',
      date: '2025-03-15',
      image: 'https://m.media-amazon.com/images/I/51LzZduWfsL._AC_SL1000_.jpg',
    },
    {
      id: 'ORD124',
      item: 'Bluetooth Headphones',
      date: '2025-03-10',
      image: 'https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg',
    },
  ],

 payments: [
    { method: 'Visa **** 1234', expiry: '08/27', icon: '/visa.png' },
    { method: 'PayPal: john@paypal.com', expiry: '-', icon: '/paypal.png' },
  ],
  addresses :[
    { name: 'Home', detail: '123 Main Street, New York, NY' },
    { name: 'Work', detail: '456 Business Ave, San Francisco, CA' },
  ],

  setShowModal: (val) => set({ showModal: val }),
}));
