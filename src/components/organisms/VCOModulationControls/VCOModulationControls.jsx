import Fieldset from '@/components/molecules/Fieldset';
import Toggle from '@/components/molecules/Toggle';
import Knob from '@/components/molecules/Knob';

export default function VCOModulationControls() {
  return (
    <Fieldset
      legend="VCO2 Modulation"
      orientation="horizontal"
    >
      <Knob
        name="crossModDepth"
        label="Cross Mod Depth"
      />
      <Knob
        name="pitchEGInt"
        label="Pith EG Int"
      />
      <Toggle
        name="sync"
        label="Sync"
      />
      <Toggle
        name="ring"
        label="Ring"
      />
    </Fieldset>
  );
}
