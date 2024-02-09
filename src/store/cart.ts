// import { create } from 'zustand'
// import { persist, createJSONStorage } from 'zustand/middleware'
// import { produce } from 'immer';

// type State = {
//     quantity: string | null;
//   size: string | null;  
//   isOrder: boolean;  
//   setToken: (newToken: string | null, newRefreshToken?: string | null, newRoleToken?: string | null) => void;
// };

// export const useAuthenticateStore = create<State>()(
//   persist(
//     (set) => ({      
//       quantity: null,
//       size: null,      
//       isOrder: false,            
//       setToken: (newQuantity, newSize) => {
//         set(
//           produce((state) => {
//             state.quantity = newQuantity;
//             state.size = newSize;            
//             state.isOrder = !!newQuantity;            
//           })
//         );
//       },
//     }),
    
//     {
//       name: 'auth-storage', 
//       storage: createJSONStorage(() => sessionStorage), 
//     }
//   )
// );
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';

type State = {
  quantity: number | null;
  size: string | null;
  isOrder: boolean;
  setCartSize: (newSize?: string| null,  ) => void;
  setCartQ: (newQuantity?: number  ) => void;
};

const localStorageMiddleware = createJSONStorage(() => localStorage);

export const useCartStore = create<State>()(
  persist(
    (set) => ({
      quantity: null,
      size: null,
      isOrder: false,
      setCartSize: (newSize) => {
        set(
          produce((state) => {            
            state.size = newSize;
            state.isOrder = !!newSize;
          })
        );
      },
      setCartQ: (newQuantity) => {
        set(
          produce((state) => {
            state.quantity = newQuantity;         
          })
        );
      },
    }),
    {
      name: 'cart-storage', 
      storage: localStorageMiddleware,
    }
  )
);
