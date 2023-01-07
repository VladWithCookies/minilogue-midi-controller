import Row from '@/components/atoms/Row';
import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';
import Switch from '@/components/molecules/Switch';

export default function LFOControls() {
  return (
    <Fieldset legend="LFO">
      <Row>
        <Switch
          name="wave"
          label="Wave"
          options={[
            { value: 1, label: '🪚' },
            { value: 2, label: '📐' },
            { value: 3, label: '📦' },
          ]}
        />
        <Switch
          name="EGMod"
          label="EG Mod"
          options={[
            { value: 1, label: 'Int' },
            { value: 2, label: 'Rate' },
            { value: 2, label: 'Off' },
          ]}
        />
        <Knob
          name="rate"
          label="Rate"
        />
        <Knob
          name="int"
          label="Int"
        />
        <Switch
          name="target"
          label="Target"
          options={[
            { value: 1, label: 'Pitch' },
            { value: 2, label: 'Shape' },
            { value: 2, label: 'Cutoff' },
          ]}
        />
      </Row>
    </Fieldset>
  )
}
