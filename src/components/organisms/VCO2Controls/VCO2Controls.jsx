import Fieldset from '@/components/molecules/Fieldset';
import Switch from '@/components/molecules/Switch';
import Knob from '@/components/molecules/Knob';

export default function VCO2Controls() {
  return (
    <Fieldset
      legend="VCO2"
      orientation="horizontal"
    >
      <Switch
        name="49"
        label="Octave"
        options={[
          { value: 0, label: '1' },
          { value: 42, label: '2' },
          { value: 84, label: '3' },
          { value: 127, label: '4' },
        ]}
      />
      <Switch
        name="51"
        label="Wave"
        options={[
          { value: 127, label: '🪚' },
          { value: 64, label: '📐' },
          { value: 0, label: '📦' },
        ]}
      />
      <Knob
        name="35"
        label="Pitch"
      />
      <Knob
        name="37"
        label="Shape"
      />
    </Fieldset>
  )
}
