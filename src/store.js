import { createSlice } from '@reduxjs/toolkit';

const CatSlice = createSlice({
    name : "category",
    initialState : { value : []},
    reducers : {
        change : (state, action) => {
            state.value = [ action.payload]
        }
    }

})

    export const { change } = CatSlice.actions
    export default CatSlice