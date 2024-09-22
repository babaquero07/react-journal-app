import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: true,
  messageSaved: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {
      // this is valid because redux toolkit uses immer under the hood to make the state mutable and return
      // state.notes.push(action.payload);
      state.notes = [...state.notes, action.payload];
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;
    },
    setNotes: (state, action) => {},
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
