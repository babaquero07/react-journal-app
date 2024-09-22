import { Fab } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}

      <NoteView />

      {/* Floating Action Button */}
      <Fab
        onClick={onClickNewNote}
        color="primary"
        sx={{
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <Add />
      </Fab>
    </JournalLayout>
  );
};
