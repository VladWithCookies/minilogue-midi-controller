import Row from '@/components/atoms/Row';
import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';
import Switch from '@/components/molecules/Switch';

export default function LFOControls() {
  return (
    <Fieldset legend="LFO">
      <Row>
        <Switch
          name="58"
          label="Wave"
          options={[
            { value: 127, label: '🪚' },
            { value: 64, label: '📐' },
            { value: 0, label: '📦' },
          ]}
        />
        <Switch
          name="57"
          label="EG Mod"
          options={[
            { value: 127, label: 'Int' },
            { value: 64, label: 'Rate' },
            { value: 0, label: 'Off' },
          ]}
        />
        <Knob
          name="24"
          label="Rate"
        />
        <Knob
          name="26"
          label="Int"
        />
        <Switch
          name="56"
          label="Target"
          options={[
            { value: 127, label: 'Pitch' },
            { value: 64, label: 'Shape' },
            { value: 0, label: 'Cutoff' },
          ]}
        />
      </Row>
    </Fieldset>
  )
}
