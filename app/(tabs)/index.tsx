import {
  Image,
  StyleSheet,
  Platform,
  Button,
  View,
  Pressable,
  Text,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Fretboard from "@/components/frets";
import { getFretboardNotes } from "@/utils/functions";
import RandomNoteGenerator from "@/components/randomNoteGeneratorDisplay";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { RootState, store } from "@/global/store";
import { useEffect, useState } from "react";
import {
  resetGeneratedNoteCount,
  setGuessesBeforeTuningChange,
} from "@/global/slices/noteSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const openStringNotes = [7, 0];
  const numberOfNotes = 13;
  const [noteIndex, setNoteIndex] = useState(0);
  const turnsPerTuning = 10;

  const { guessesBeforeTuningChange } = useSelector(
    (state: RootState) => state.note
  );
  const [notes, setNotes] = useState(
    getFretboardNotes(openStringNotes[noteIndex], numberOfNotes)
  );
  const [isInProgress, setIsInProgress] = useState(false);

  useEffect(() => {
    dispatch(setGuessesBeforeTuningChange(turnsPerTuning));
  }, []);

  useEffect(() => {
    console.log("guesses before tuning change:", guessesBeforeTuningChange);
    if (guessesBeforeTuningChange === 0) {
      const newIndex = (noteIndex + 1) % openStringNotes.length;
      setNoteIndex(newIndex);
      setNotes(getFretboardNotes(openStringNotes[noteIndex], numberOfNotes));
      dispatch(setGuessesBeforeTuningChange(turnsPerTuning));
    }
  }, [guessesBeforeTuningChange]);

  const onStartStop = () => {
    dispatch(resetGeneratedNoteCount());
    setIsInProgress(!isInProgress);
  };

  return (
    <View style={styles.mainView}>
      <Fretboard notes={notes} />
      <View>
        <Pressable style={styles.startStopButton} onPress={onStartStop}>
          <Text>start / stop</Text>
        </Pressable>
        {isInProgress && (
          <RandomNoteGenerator notes={notes} timeInterval={3000} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    margin: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  startStopButton: {
    height: 50,
    width: 100,
    backgroundColor: "green",
    marginBottom: 200,
    transform: [{ rotate: "90deg" }],
  },
});
