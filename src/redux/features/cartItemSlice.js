import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  value: items,
};
export const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const temp = state.value.filter(
        (item) =>
          item.slug === newItem.slug &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (temp.length > 0) {
        state.value = state.value.filter(
          (item) =>
            item.slug !== newItem.slug ||
            item.color !== newItem.color ||
            item.size !== newItem.size
        );
        state.value = [
          ...state.value,
          {
            id: temp[0].id,
            slug: newItem.slug,
            color: newItem.color,
            size: newItem.size,
            price: newItem.price,
            quantily: newItem.quantily + temp[0].quantily,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...action.payload,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },

    updateCartItem: (state, action) => {
      const item = action.payload;
      const temp = state.value.find(
        (e) =>
          e.slug === item.slug && e.color === item.color && e.size === item.size
      );

      if (temp) {
        state.value = state.value.filter(
          (e) =>
            e.slug !== item.slug ||
            e.color !== item.color ||
            e.size !== item.size
        );

        state.value = [
          ...state.value,
          {
            id: temp.id,
            slug: item.slug,
            color: item.color,
            size: item.size,
            price: item.price,
            quantily: item.quantily,
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },

    removeCartItem: (state, action) => {
      const item = action.payload;
      state.value = state.value.filter(
        (e) =>
          item.slug !== e.slug || item.size !== e.size || item.color !== e.color
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, updateCartItem, removeCartItem } =
  cartItemSlice.actions;

export default cartItemSlice.reducer;
