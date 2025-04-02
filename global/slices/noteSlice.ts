import { NOTES } from "@/constants";
import { INoteState } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: INoteState = {
  generatedNote: "",
  generatedNoteCount: 0,
  guessedNoteArray: [],
  hasAttempted: false,
  guessesBeforeTuningChange: 5,
};

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    setGeneratedNote: (state, action) => {
      const { payload } = action;
      state.generatedNote = payload;
      state.hasAttempted = false;
    },
    setGuessedNote: (state, action) => {
      const { payload } = action;
      console.log("payload:", payload);
      state.guessedNoteArray = payload;
      state.hasAttempted = true;
    },
  },
});

export const { setGeneratedNote, setGuessedNote } = noteSlice.actions;

export const selectIsGuessSuccessful = (state: { note: INoteState }) => {
  const {
    note: { generatedNote, guessedNoteArray, hasAttempted },
  } = state;

  if (!hasAttempted) return null;

  return guessedNoteArray?.includes(generatedNote);
};
export default noteSlice.reducer;
