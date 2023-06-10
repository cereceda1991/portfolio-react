import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';

// Configura tu store con el reducer del slice de estado
export const store = configureStore({
  reducer: {
    language: languageReducer,
    // Otros reducers de tu aplicación
  },
});
