import { Fab } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active: activeNote } = useSelector(
    (state) => state.journal
  );

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {activeNote ? <NoteView /> : <NothingSelectedView />}

      {/* Floating Action Button */}
      <Fab
        disabled={isSaving}
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
