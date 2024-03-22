import { createSlice } from '@reduxjs/toolkit';
import { getUsers as fetchUsers } from '../services/getUsers';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk(
  "api/getUsers",
  async (pages, thunkAPI) => {
    try {
      const response = await fetchUsers(pages);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Lógica de favoritos

export const toggleFavorite = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
      toggleFavoriteState: (state, action) => {
        const userId = action.payload;
        const userToUpdate = state.find(user => user.id === userId);
        if (userToUpdate) {
          userToUpdate.favorite = !userToUpdate.favorite;
        }
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getUsers.fulfilled, (state, action) => {
        return action.payload.map(user => ({ ...user, favorite: false }));
      });
    }
  });

// Trae el formulario 

export const formSlice = createSlice({
  name: 'form',
  initialState:{
    isNewContactVisible: false,
    UsuariosBase: [],
    UsuariosFavoritos: [],
    Pages: [],
    TotalPages: [],
  },
  
  reducers: {
    isFormVisible: (state) => {
      state.isNewContactVisible = !state.isNewContactVisible
    },
    setPages(state, action) {
      state.Pages = action.payload;
    },
    setTotalPages(state, action) {
      state.TotalPages = action.payload;
    },
  }
});

// Exportar acciones y reductores
export const { toggleFavoriteState } = toggleFavorite.actions;
export const { isFormVisible, setPages } = formSlice.actions;

// Exportar los reductores combinados
export const reducers = {
  form: formSlice.reducer,
  users: toggleFavorite.reducer
};
