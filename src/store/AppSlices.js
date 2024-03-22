import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../services/getUsers';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers1 = createAsyncThunk(
  "users/getUsers",
  async (Pages, thunkAPI) => {
    console.log("hola")
    try {
      const response = await getUsers(Pages);
      console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Lógica de favoritos

export const usersSlice = createSlice({
    name: 'users',
    initialState: {userList: []},
    reducers: {
      toggleFavoriteState: (state, action) => {
        const userId = action.payload;  
        const userToUpdate = state.userList.find(user => user.id === userId);
        console.log(userToUpdate)
        if (userToUpdate) {
          userToUpdate.favorite = !userToUpdate.favorite;
        }
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getUsers1.fulfilled, (state, action) => {
      state.userList = action.payload.map(user => ({ ...user, favorite: false }));
         
        
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
    Pages: 1,
    TotalPages: 3,
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

    setUsuariosBase(state, action) {
      state.UsuariosBase = action.payload;
      
    },
    setUsuariosFavoritos(state, action) {
      state.UsuariosFavoritos = action.payload;
      
    },

  }
});

// Exportar acciones y reductores
export const { toggleFavoriteState } = usersSlice.actions;
export const { isFormVisible, setPages } = formSlice.actions;

// Exportar los reductores combinados
export const reducers = {
  form: formSlice.reducer,
  users: usersSlice.reducer
};
