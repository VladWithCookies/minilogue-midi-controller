import Fieldset from '@/components/molecules/Fieldset';
import Switch from '@/components/molecules/Switch';
import Knob from '@/components/molecules/Knob';

export default function VCO2ModulationControls() {
  return (
    <Fieldset
      legend="VCO2 Modulation"
      orientation="horizontal"
    >
      <Knob
        name="41"
        label="Cross Mod Depth"
      />
      <Knob
        name="42"
        label="Pith EG Int"
      />
      <Switch
        name="80"
        label="Sync"
        options={[
          { value: 127, label: 'On' },
          { value: 0, label: 'Off' },
        ]}
      />
      <Switch
        name="81"
        label="Ring"
        options={[
          { value: 127, label: 'On' },
          { value: 0, label: 'Off' },
        ]}
      />
    </Fieldset>
  );
}
