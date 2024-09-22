import { addDoc, collection } from "@firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

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
