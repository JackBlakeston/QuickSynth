import { keyboardMappings } from "./utils/keyboardMappings";
import { noteFrequencies } from "./utils/noteFrequencies";
import {playNote} from './synth'

const activeNotes = {}

export const playControl = (event) => {
  const key = event.key
  if (!event.repeat) {
    if (keyboardMappings[key]) {
      const note = keyboardMappings[key];
      activeNotes[note] = playNote(noteFrequencies[note]);
    }
  }
}

export const stopControl = (event) => {
  const key = event.key;
  if (keyboardMappings[key]) {
    const note = keyboardMappings[key];
    if (activeNotes[note]) {
      activeNotes[note]();
      delete activeNotes[note];
    }
  }
}
