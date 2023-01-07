import Fieldset from '@/components/molecules/Fieldset';
import Switch from '@/components/molecules/Switch';
import Knob from '@/components/molecules/Knob';

export default function VCOControls({ name, legend }) {
  return (
    <Fieldset
      legend={legend}
      orientation="horizontal"
    >
      <Switch
        name="octave"
        label="Octave"
        options={[
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 4 },
        ]}
      />
      <Switch
        name="wave"
        label="Wave"
        options={[
          { value: 1, label: '🪚' },
          { value: 2, label: '📐' },
          { value: 3, label: '📦' },
        ]}
      />
      <Knob
        name="pitch"
        label="Pitch"
      />
      <Knob
        name="shape"
        label="Shape"
      />
    </Fieldset>
  )
}
