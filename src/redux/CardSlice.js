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
  let words = [];
  const query = await getDocs(collection(db, "words"));
  query.forEach((doc) => {
    words = [...words, { id: doc.id, ...doc.data() }];
    words.sort(function (a, b) {
      return b.date - a.date;
    });
  });
  return words;
});

// DELETE
export const deleteList = createAsyncThunk("DELETE_CARD", async (id) => {
  await deleteDoc(doc(db, "words", id));
  alert("단어를 삭제했습니다!");
  let words = [];
  const query = await getDocs(collection(db, "words"));
  query.forEach((doc) => {
    words = [...words, { id: doc.id, ...doc.data() }];
    words.sort(function (a, b) {
      return b.date - a.date;
    });
  });
  return words;
});

// CHECK
export const checkList = createAsyncThunk("CHECK_LIST", async (list) => {
  const wordRef = doc(db, "words", list.id);
  await updateDoc(wordRef, {
    completed: !list.completed,
  });
  let words = [];
  const query = await getDocs(collection(db, "words"));
  query.forEach((doc) => {
    words = [...words, { id: doc.id, ...doc.data() }];
    words.sort(function (a, b) {
      return b.date - a.date;
    });
  });
  return words;
});
const CardSlice = createSlice({
  name: "CardSlice",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, action) => {
      state.list = [...action.payload];
    },
    [deleteList.fulfilled]: (state, action) => {
      state.list = [...action.payload];
    },
    [addList.fulfilled]: (state, action) => {
      state.list = [...action.payload];
    },
    [checkList.fulfilled]: (state, action) => {
      state.list = [...action.payload];
    },
  },
});
export default CardSlice.reducer;
