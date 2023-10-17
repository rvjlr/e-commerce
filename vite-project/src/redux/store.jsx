import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true
  
});

//git init
//git add README.md
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/harshaelon/newr1.git
//git push -u origin main




