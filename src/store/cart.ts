
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';

type Item = {

  id: string;
  quantity: number;
  size: string;

};

type State = {
  id: string;
  items: Item[];
  size: string;
  quantity: number; // Add quantity property to the State type
  isOrder: boolean;
  addToCart: (itemId: string, newSize: string, newQuantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateItemQuantity: (itemId: string, newQuantity: number) => void;
  calculateTotalQuantity: (currentState: State) => number;
};

const localStorageMiddleware = createJSONStorage(() => localStorage);

export const useCartStore = create<State>()(
  persist(
    (set) => ({
      id: '',
      items: [],
      size: '',
      quantity : 0,      
      isOrder: false,
      
      addToCart: (itemId, newSize, newQuantity) => {
        set(
          produce((state) => {
            const existingItemIndex = state.items.findIndex((item : Item) => item.id === itemId && item.size === newSize);
            if (existingItemIndex !== -1) {
              // If the item with the same id and size exists, update its quantity
              state.items = state.items.map((item : Item, index : number) => {
                if (index === existingItemIndex) {
                  return {
                    ...item,
                    quantity: item.quantity + newQuantity
                  };
                }
                return item;
              });
            } else {
              // Add new item
              state.items.push({ id: itemId, size: newSize, quantity: newQuantity });
            }
            // Update isOrder flag
            state.isOrder = true;
          })
        );
      },
      
      
      removeFromCart: (itemId) => {
        set(
          produce((state) => {
            state.items = state.items.filter((item : Item) => item.id !== itemId);
            state.isOrder = state.items.length > 0; // Check if there are remaining items
          })
        );
      },
      updateItemQuantity: (itemId, newQuantity) => {
        set(
          produce((state) => {
            const itemToUpdate = state.items.find((item : Item) => item.id === itemId);
            if (itemToUpdate) {
              itemToUpdate.quantity = newQuantity;
            }
          })
        );
      },
      calculateTotalQuantity: (currentState) => {
        // Function to calculate total quantity
        return currentState.items.reduce((total, item) => total + item.quantity, 0);
      },
      
    }),
    {
      name: 'cart-storage',
      storage: localStorageMiddleware,
    }
  ),
);
