import { MIDI_CC_VALUES, MIDI_CC_MAX } from '@/constants';

export const toMIDI = (data) => {
  let result = {};

  Object.keys(data).forEach((key) => {
    const MIDI_CC = MIDI_CC_VALUES[key];
    const value =  data[key];

    /* FIXME: Due the imperfection of my VAE these parameters make patches out of tune
       so I decided to ignore them for demo purposes */
    if (['vco_1_pitch', 'vco_2_pitch', 'vco_2_pitch_eg_int'].includes(key)) {
      result[MIDI_CC] = 64;
    } else {
      result[MIDI_CC] = Math.floor(Math.abs(value * MIDI_CC_MAX / 1024));
    }
  });

  return result;
}
