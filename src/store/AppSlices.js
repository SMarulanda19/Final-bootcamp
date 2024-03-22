import { createSlice} from '@reduxjs/toolkit'
import {getUsers as fetchUsers} from '../services/getUsers'
import { createAsyncThunk} from '@reduxjs/toolkit'


// Consumir la API:

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
})




export const {isFormVisible, setPages } = formSlice.actions
export default formSlice.reducer




// State es el Estado de la Aplicaciòn  InitialState es lo mismo

