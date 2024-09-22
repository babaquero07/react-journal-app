import { addDoc, collection, updateDoc, doc } from "@firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => async (dispatch, getState) => {
  // Dispatch the savingNewNote action
  dispatch(savingNewNote());

  // getState (personalized function Name) allows us to access the current state of the store. Only works with Thunks
  const { uid } = getState().auth;

  // Create a new note object
  const newNote = {
    title: "",
    body: "",
    date: new Date().getTime(),
  };

  try {
    const doc = await addDoc(
      collection(FirebaseDB, `${uid}/journal/notes`),
      newNote
    );

    // Dispatch the addNewNote action
    dispatch(addNewEmptyNote({ id: doc.id, ...newNote }));

    // Dispatch the setActiveNote action
    dispatch(setActiveNote({ id: doc.id, ...newNote }));
  } catch (error) {
    console.error(error);
  }
};

export const startLoadingNotes = () => async (dispatch, getState) => {
  const { uid } = getState().auth;
  if (!uid) throw new Error("User not authenticated");

  // Load the notes
  const notes = await loadNotes(uid);

  // Dispatch the setNotes action
  dispatch(setNotes(notes));
};

export const startSaveNote = () => async (dispatch, getState) => {
  dispatch(setSaving());

  const { uid } = getState().auth;
  const { active: activeNote } = getState().journal;

  try {
    const noteToFireStore = { ...activeNote };
    delete noteToFireStore.id;

    // Update the note in the database
    await updateDoc(
      doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`),
      noteToFireStore
    );

    // Update the note in the store
    dispatch(updateNote(activeNote));
  } catch (error) {
    console.error(error);
  }
};
