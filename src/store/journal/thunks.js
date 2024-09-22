import { addDoc, collection, updateDoc, doc } from "@firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

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

    return {
      ok: true,
      msg: "Note saved",
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      msg: "Error saving note",
    };
  }
};

export const startUploadingFiles =
  (files = []) =>
  async (dispatch) => {
    dispatch(setSaving());

    // Upload multiple files
    const photosUrls = await Promise.all([...files].map(fileUpload));

    // Dispatch the setPhotosToActiveNote action
    dispatch(setPhotosToActiveNote(photosUrls));
  };
