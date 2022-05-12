import * as Tone from 'tone';

export const playNote = (noteFrequency) => {
  const osc1 = new Tone.Oscillator(220, 'triangle').toDestination();
  const osc2 = new Tone.Oscillator(220, 'square').toDestination();
  const osc3 = new Tone.Oscillator(220, 'sine').toDestination();
  const oscillators = [osc1, osc2, osc3];

  oscillators.forEach(osc => osc.volume.value = -25);
  oscillators.forEach(osc => osc.frequency.value = noteFrequency);
  oscillators.forEach(osc => osc.start());

  return () => {
    oscillators.forEach(osc => osc.stop());
    setTimeout(() => {
      oscillators.forEach(osc => osc.dispose());
    }, 300);
  }
}
