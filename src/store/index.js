import { configureStore } from '@reduxjs/toolkit';
import ContactSlice from './slices/ContactSlice';

const store = configureStore({
  reducer: {
    contacts: ContactSlice,
  },
});

export default store;
