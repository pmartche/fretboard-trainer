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
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { store } from "@/global/store";
import { useState } from "react";
import { resetGeneratedNoteCount } from "@/global/slices/noteSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const openStringNotes = [7, 0];
  const turnsPerTuning = 10;
  const guessesBeforeTuningChange = 10;
  const [notes, setNotes] = useState(getFretboardNotes(7, 13));
  console.log("notes:", notes);
  const [isInProgress, setIsInProgress] = useState(false);

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
