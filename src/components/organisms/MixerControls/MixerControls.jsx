import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';

export default function MixerControls() {
  return (
    <Fieldset legend="Mixer">
      <Knob
        name="39"
        label="VCO1"
      />
      <Knob
        name="40"
        label="VCO2"
      />
      <Knob
        name="33"
        label="Noise"
      />
    </Fieldset>
  )
}
