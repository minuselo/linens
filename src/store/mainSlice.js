import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        mainArray: [1,2,3]
    },
    reducers: {
        main(state,action) {
            console.log(state.mainArray);
        }
    }
})

export const {main} = mainSlice.actions;

export default mainSlice.reducer;