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
  const generatedNote = useSelector(
    (state: RootState) => state.note.generatedNote
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
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     const noteIndex = Math.floor(Math.random() * notes.length);
  //     const accidentalIndex = Math.floor(
  //       Math.random() * notes[noteIndex].length
  //     );
  //     dispatch(setGeneratedNote(notes[noteIndex][accidentalIndex]));
  //   }, timeInterval);

  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    const noteIndex = Math.floor(Math.random() * notes.length);
    const accidentalIndex = Math.floor(Math.random() * notes[noteIndex].length);
    console.log("note index:", noteIndex);
    console.log("accidental index:", accidentalIndex);
    console.log("note:", notes[noteIndex][accidentalIndex]);
    console.log("generated note:", generatedNote);
    console.log("guessed note:", guessedNote);
    const timer = setTimeout(() => {
      dispatch(setGeneratedNote(notes[noteIndex][accidentalIndex]));
    }, 1000);

    return () => clearTimeout(timer);
  }, [guessedNote]);

  return (
    <Text
      style={styles.note}
    >{`${generatedNote}${isGuessSuccessful ? "✔" : isGuessSuccessful !== null ? "✖" : ""}`}</Text>
  );
};

export default RandomNoteGenerator;
