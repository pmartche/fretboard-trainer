import { FRETS_TO_SYMBOLS_MAPPER, NOTES } from "@/constants";

export const getFretboardNotes = (
  startingNoteIndex: keyof typeof NOTES,
  noteCount: number
) => {
  const notes = [];
  let noteIndex = startingNoteIndex as number;
  for (let i = 0; i < noteCount; i++) {
    notes.push(NOTES[noteIndex]);
    noteIndex = (noteIndex + 1) % NOTES.length;
  }
  return notes;
};

export const getFretSymbol = (index: number) =>
  FRETS_TO_SYMBOLS_MAPPER.find(({ fretNumber }) => fretNumber === index)
    ?.symbol || "";
