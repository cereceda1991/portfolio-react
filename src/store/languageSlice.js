import { createSlice } from '@reduxjs/toolkit';

// Define el slice de estado para el idioma
const languageSlice = createSlice({
  name: 'language',
  initialState: null,
  reducers: {
    setLanguageData: (state, action) => {
      return action.payload;
    },
  },
});

// Exporta las acciones del slice de estado
export const { setLanguageData } = languageSlice.actions;

// Exporta el reducer del slice de estado
export default languageSlice.reducer;
