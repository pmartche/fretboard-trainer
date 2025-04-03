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
      state.generatedNoteCount++;
      state.hasAttempted = false;
    },
    setGuessedNote: (state, action) => {
      const { payload } = action;
      state.guessedNoteArray = payload;
      state.hasAttempted = true;
    },
    setGuessesBeforeTuningChange: (state, action) => {
      const { payload } = action;
      state.guessesBeforeTuningChange = payload;
    },
    resetGeneratedNoteCount: (state) => {
      state.generatedNoteCount = 0;
    },
  },
});

export const {
  setGeneratedNote,
  setGuessedNote,
  setGuessesBeforeTuningChange,
  resetGeneratedNoteCount,
} = noteSlice.actions;

export const selectIsGuessSuccessful = (state: { note: INoteState }) => {
  const {
    note: { generatedNote, guessedNoteArray, hasAttempted },
  } = state;

  if (!hasAttempted) return null;

  return guessedNoteArray?.includes(generatedNote);
};
export default noteSlice.reducer;
