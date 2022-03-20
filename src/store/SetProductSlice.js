import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'ProductSlice',
    initialState: {
        id:null,
        name:null,
        
    },
    reducers: {
        main(state,action) {
            console.log(state.mainArray);
        }
    }
})

export const {main} = mainSlice.actions;

export default mainSlice.reducer;