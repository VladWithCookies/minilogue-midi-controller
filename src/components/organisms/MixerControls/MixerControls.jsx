import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';

export default function MixerControls() {
  return (
    <Fieldset legend="Mixer">
      <Knob
        name="vco1"
        label="VCO1"
      />
      <Knob
        name="vco2"
        label="VCO2"
      />
      <Knob
        name="noise"
        label="Noise"
      />
    </Fieldset>
  )
}
