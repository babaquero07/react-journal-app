import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      // this is valid because redux toolkit uses immer under the hood to make the state mutable and return a new state
      // state.notes.push(action.payload);
      state.notes = [...state.notes, action.payload];
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;

      state.messageSaved = "";
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state) => {
      state.isSaving = true;

      state.messageSaved = "";
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;

      state.notes = state.notes.map((note) =>
        note.id === payload.id ? payload : note
      );

      state.messageSaved = `${payload.title}, updated successfully`;
    },
    deleteNoteById: (state, { payload }) => {
      state.notes = state.notes.filter((note) => note.id !== payload);

      state.active = null;
    },
    setPhotosToActiveNote: (state, { payload }) => {
      state.active.imageUrls = [...(state.active.imageUrls || []), ...payload];

      state.isSaving = false;
    },
    clearNotesOnLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
  },
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  setPhotosToActiveNote,
  clearNotesOnLogout,
} = journalSlice.actions;
