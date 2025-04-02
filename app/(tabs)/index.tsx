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
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { store } from "@/global/store";
import { useState } from "react";

export default function HomeScreen() {
  const notes = getFretboardNotes(7, 13);
  console.log("notes:", notes);
  const [isInProgress, setIsInProgress] = useState(false);
  return (
    <Provider store={store}>
      <View style={styles.mainView}>
        <Fretboard notes={notes} />
        <View>
          <Pressable
            style={styles.startStopButton}
            onPress={() => setIsInProgress(!isInProgress)}
          >
            <Text>start/stop</Text>
          </Pressable>
          {isInProgress && (
            <RandomNoteGenerator notes={notes} timeInterval={3000} />
          )}
        </View>
      </View>
    </Provider>
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
