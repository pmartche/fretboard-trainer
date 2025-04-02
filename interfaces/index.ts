export interface INoteState {
  generatedNote: string;
  generatedNoteCount: number;
  guessedNoteArray: string[];
  hasAttempted: boolean;
  guessesBeforeTuningChange: number;
}
