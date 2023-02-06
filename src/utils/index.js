import { MIDI_CC_VALUES } from '@/constants';

export const toMIDI = (data) => {
  let result = {};

  Object.keys(data).forEach((key) => {
    const MIDI_CC = MIDI_CC_VALUES[key];
    const value =  data[key];

    result[MIDI_CC] = Math.floor(Math.abs(value * 127 / 1024));
  });

  return result;
}
