import Row from '@/components/atoms/Row';
import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';
import Switch from '@/components/molecules/Switch';

export default function FilterControls() {
  return (
    <Fieldset legend="Filter">
      <Knob
        name="43"
        label="Cutoff"
      />
      <Row>
        <Knob
          name="44"
          label="Resonance"
        />
        <Knob
          name="45"
          label="EG Int"
        />
      </Row>
      <Row>
        <Switch
          name="84"
          options={[
            { value: 0, label: '2-pole' },
            { value: 127, label: '4-pole' },
          ]}
        />
        <Switch
          name="83"
          label="Key Track"
          options={[
            { value: 127, label: '100%' },
            { value: 64, label: '50%' },
            { value: 0, label: 'Off' },
          ]}
        />
        <Switch
          name="82"
          label="Velocity"
          options={[
            { value: 127, label: '100%' },
            { value: 64, label: '50%' },
            { value: 0, label: 'Off' },
          ]}
        />
      </Row>
    </Fieldset>
  )
}
