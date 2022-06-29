import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../shared/firebase";

// GET
export const getList = createAsyncThunk("GET_CARD", async () => {
  let words = [];
  const query = await getDocs(collection(db, "words"));
  query.forEach((doc) => {
    words = [...words, { id: doc.id, ...doc.data() }];
    // date 를 기준으로 내림차순 정렬
    words.sort(function (a, b) {
      return b.date - a.date;
    });
  });
  return words;
});

// ADD
export const addList = createAsyncThunk("ADD_CARD", async (newWord) => {
  await addDoc(collection(db, "words"), {
    word: newWord.word,
    mean: newWord.mean,
    date: Date.now(),
    completed: false,
  });
});

// DELETE
export const deleteList = createAsyncThunk("DELETE_CARD", async (id) => {
  await deleteDoc(doc(db, "words", id));
});

// CHECK
export const checkList = createAsyncThunk("CHECK_LIST", async (list) => {
  const wordRef = doc(db, "words", list.id);
  console.log(list.id, list.completed);
  await updateDoc(wordRef, {
    completed: !list.completed,
  });
  return list;
});
const CardSlice = createSlice({
  name: "CardSlice",
  initialState: {
    list: [
      {
        completed: false,
        date: 0,
        mean: "",
        word: "",
      },
    ],
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
    [addList.fulfilled]: (state, action) => {
      window.location.reload();
    },
    [checkList.fulfilled]: (state, action) => {
      state.list = [...state.list];
      window.location.reload();
    },
  },
});
export default CardSlice.reducer;
