import Knob from '@/components/molecules/Knob';
import Fieldset from '@/components/molecules/Fieldset';
import Switch from '@/components/molecules/Switch';

export default function MasterControls() {
  return (
    <Fieldset legend="Master">
      <Knob
        name="master"
        label="Master"
      />
      <Knob
        name="tempo"
        label="Tempo"
      />
      <Switch
        name="octave"
        label="Octave"
        orientation="horizontal"
        options={[
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 },
        ]}
      />
    </Fieldset>
  );
}
