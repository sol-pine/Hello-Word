import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../shared/firebase";

// GET
export const getList = createAsyncThunk("GET_CARD", async () => {
  let words = [];
  const query = await getDocs(collection(db, "words"));
  query.forEach((doc) => {
    words = [...words, { id: doc.id, ...doc.data() }];
    console.log(words);
  });
  return words;
});
// ADD
export const addList = createAsyncThunk("ADD_CARD", async () => {});
// DELETE
export const deleteList = createAsyncThunk("DELETE_CARD", async (id) => {
  await deleteDoc(doc(db, "words", id));
});

const CardSlice = createSlice({
  name: "CardSlice",
  initialState: {
    list: [{}],
  },
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, action) => {
      state.list = [...action.payload];
    },
    [deleteList.fulfilled]: (state, action) => {
      state.list.filter((list) => list.id !== action.payload);
      window.location.reload();
    },
  },
});
export default CardSlice.reducer;
