import Fieldset from '@/components/molecules/Fieldset';
import Switch from '@/components/molecules/Switch';
import Knob from '@/components/molecules/Knob';

export default function VCO1Controls() {
  return (
    <Fieldset
      legend="VCO1"
      orientation="horizontal"
    >
      <Switch
        name="48"
        label="Octave"
        options={[
          { value: 0, label: '1' },
          { value: 42, label: '2' },
          { value: 84, label: '3' },
          { value: 127, label: '4' },
        ]}
      />
      <Switch
        name="50"
        label="Wave"
        options={[
          { value: 127, label: '🪚' },
          { value: 64, label: '📐' },
          { value: 0, label: '📦' },
        ]}
      />
      <Knob
        name="34"
        label="Pitch"
      />
      <Knob
        name="36"
        label="Shape"
      />
    </Fieldset>
  )
}
