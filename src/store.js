import { createSlice } from '@reduxjs/toolkit';

const CatSlice = createSlice({
    name : "category",
    initialState : { value : []},
    reducers : {
        change : (state, action) => {
            state.value = [state, action.payload]
        }
    }

})

    export const { change } = CatSlice.actions
    export default CatSlice