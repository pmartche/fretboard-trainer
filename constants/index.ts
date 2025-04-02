export const NOTES = [
  ["A"],
  ["A♯", "B♭"],
  ["B"],
  ["C"],
  ["C♯", "D♭"],
  ["D"],
  ["D♯", "E♭"],
  ["E"],
  ["F"],
  ["F♯", "G♭"],
  ["G"],
  ["G♯", "A♭"],
];

export const FRETBOARD_SYMBOL = "•";

export const FRETS_TO_SYMBOLS_MAPPER = [
  { fretNumber: 3, symbol: FRETBOARD_SYMBOL },
  { fretNumber: 5, symbol: FRETBOARD_SYMBOL },
  { fretNumber: 7, symbol: FRETBOARD_SYMBOL },
  { fretNumber: 9, symbol: FRETBOARD_SYMBOL },
  {
    fretNumber: 12,
    symbol: FRETBOARD_SYMBOL + "\n" + FRETBOARD_SYMBOL,
  },
  { fretNumber: 15, symbol: FRETBOARD_SYMBOL },
  { fretNumber: 17, symbol: FRETBOARD_SYMBOL },
  { fretNumber: 19, symbol: FRETBOARD_SYMBOL },
  { fretNumber: 21, symbol: FRETBOARD_SYMBOL },
  { fretNumber: 12, symbol: FRETBOARD_SYMBOL + "\n" + FRETBOARD_SYMBOL },
];
