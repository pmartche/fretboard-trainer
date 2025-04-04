import {
  selectIsGuessSuccessful,
  setGeneratedNote,
} from "@/global/slices/noteSlice";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { INoteState } from "@/interfaces";
import { RootState } from "@/global/store";

const RandomNoteGenerator = ({
  notes,
  timeInterval,
}: {
  notes: string[][];
  timeInterval: number;
}) => {
  const dispatch = useDispatch();
  const isGuessSuccessful = useSelector(selectIsGuessSuccessful);
  const { generatedNote, hasAttempted, generatedNoteCount } = useSelector(
    (state: RootState) => state.note
  );
  const guessedNote = useSelector(
    (state: RootState) => state.note.guessedNoteArray
  );
  const styles = StyleSheet.create({
    note: {
      fontSize: 20,
      color: isGuessSuccessful
        ? "green"
        : isGuessSuccessful !== null
          ? "red"
          : "black",
      transform: [{ rotate: "90deg" }],
    },
  });

  useEffect(() => {
    if (hasAttempted || !generatedNoteCount) {
      const noteIndex = Math.floor(Math.random() * notes.length);
      const accidentalIndex = Math.floor(
        Math.random() * notes[noteIndex].length
      );
      const timer = setTimeout(
        () => {
          dispatch(setGeneratedNote(notes[noteIndex][accidentalIndex]));
        },
        generatedNoteCount ? 1000 : 0
      );

      return () => clearTimeout(timer);
    }
  }, [guessedNote, hasAttempted]);

  return (
    <Text
      style={styles.note}
    >{`${generatedNote}${isGuessSuccessful ? "✔" : isGuessSuccessful !== null ? "✖" : ""}`}</Text>
  );
};

export default RandomNoteGenerator;
