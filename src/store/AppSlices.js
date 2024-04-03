import { createSlice } from '@reduxjs/toolkit';
import { getUsers,deleteUser } from '../services/getUsers';
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


// elimina usuarios
export const deleteUser1 = createAsyncThunk(
  "users/deleteUser",
  async (userId, thunkAPI) => {
    console.log(userId)
    try {
      const response = await deleteUser(userId);
      console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



export const usersSlice = createSlice({
    name: 'users',
    initialState: {
    userList: [],
    isNewContactVisible: false,
    Pages: 1,
    TotalPages: 3,
    UsuariosFavoritos: [],
    usersForm: [],

    },
   
    reducers: {

      addUser: (state, action) => {
        state.usersForm.push(action.payload); // Agrega el nuevo usuario a la lista de usuarios
      },

      // logica de Favoritos
      toggleFavoriteState: (state, action) => {
        const userId = action.payload;
        state.userList = state.userList.map(user => ({...user,favorite: user.id === userId?

        !user.favorite: user.favorite}))
        const index = state.UsuariosFavoritos.indexOf(userId);

        if (index === -1) {
          state.UsuariosFavoritos.push(userId);
        } else {
          state.UsuariosFavoritos.splice(index, 1);
        }


      // para hacer visible el Formulario

      },
      isFormVisible: (state) => {
        state.isNewContactVisible = !state.isNewContactVisible
      },

      setPages(state, action) {
        state.Pages = action.payload;
      },
      setTotalPages(state, action) {
        state.TotalPages = action.payload;
        
      },


    },
    extraReducers: (builder) => {
      builder.addCase(getUsers1.fulfilled, (state, action) => {
      console.log("no termina :8")
      state.userList = action.payload.map(user => ({ ...user, favorite: false }));
      })
      .addCase(deleteUser1.fulfilled, (state, action) => {
        const deletedUserId = action.meta.arg;
        state.userList = state.userList.filter(user => user.id !== deletedUserId);
        console.log("si lo borro", state.userList);
      });
    
    
    }
  });




// Exportar acciones y reductores
export const { toggleFavoriteState,isFormVisible, setPages,addUser} = usersSlice.actions;
export const selectUserList = state => state.users.userList;
export const selectUserFormList = state => state.users.usersForm;

// Exportar los reductores combinados
export const reducers = {
  users: usersSlice.reducer
};
