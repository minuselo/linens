import {createSlice} from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: {
        productId: null
    },
    reducers: {
        setProduct(state, action) {
            state.name = action.payload.name;

        },

    }
})


export const {setProduct} = ProductSlice.actions;

export default ProductSlice.reducer;