import { createSlice} from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'form',
    initialState:{
        isNewContactVisible: false,
    },
    
    reducers: {
        isFormVisible: (state) => {
            state.isNewContactVisible = !state.isNewContactVisible
          },
    }
})

export const {isFormVisible } = formSlice.actions
export default formSlice.reducer




// State es el Estado de la Aplicaciòn  InitialState es lo mismo

