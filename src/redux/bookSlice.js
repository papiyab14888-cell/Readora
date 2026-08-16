import { createSlice } from "@reduxjs/toolkit";
import { books as initialBooks } from "../data/books";

// Redux slice that manages the Readora library collection.
const bookSlice = createSlice({
  name: "books",

  initialState: initialBooks,

  reducers: {

    // Add a newly submitted book to the beginning of the collection.
    addBook: (state, action) => {
      state.unshift(action.payload);
    }
  }
});

// Export the action so AddBook.jsx can add books to Redux.
export const { addBook } = bookSlice.actions;

// Export the reducer for the Redux store.
export default bookSlice.reducer;