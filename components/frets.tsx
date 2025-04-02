import { FRETS_TO_SYMBOLS_MAPPER, NOTES } from "@/constants";
import { setGuessedNote } from "@/global/slices/noteSlice";
import { getFretSymbol } from "@/utils/functions";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

type FretboardProps = {
  tunings: number[];
  guessesBeforeTuningChange: number;
  notes: string[][];
};

const Fretboard = ({ notes }: { notes: string[][] }) => {
  const dispatch = useDispatch();
  return (
    <View>
      {notes.map((note, index) => (
        <View key={index}>
          <Pressable
            style={index === 0 ? styles.nut : styles.button}
            onPress={() => dispatch(setGuessedNote(note))}
            // onPress={() => console.log("pressed note:", note)}
          >
            <Text style={index === 0 ? styles.nutText : styles.text}>
              {index === 0 ? note[0] : getFretSymbol(index)}
            </Text>
          </Pressable>
          <View style={styles.fret} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 25,
    borderStyle: "solid",
    backgroundColor: "#A1662F",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  nut: {
    height: 20,
    width: 50,
    backgroundColor: "#999999",
    borderColor: "black",
    borderStyle: "solid",
  },
  nutText: {
    transform: [{ rotate: "90deg" }],
    textAlignVertical: "center",
    textAlign: "center",
  },
  string: {},
  fret: {
    height: 5,
    width: 25,
    backgroundColor: "#C3CAD2",
  },
  text: {
    fontSize: 24,
    textAlignVertical: "center",
    textAlign: "center",
  },
});
export default Fretboard;
