import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';
import Switch from '@/components/molecules/Switch';
import Toggle from '@/components/molecules/Toggle';
import Row from '@/components/molecules/Row';

export default function FilterControls() {
  return (
    <Fieldset legend="Filter">
      <Knob
        name="cutoff"
        label="Cutoff"
      />
      <Row>
        <Knob
          name="resonance"
          label="Resonance"
        />
        <Knob
          name="egInt"
          label="EG Int"
        />
      </Row>
      <Row>
        <Switch
          name="filterType"
          options={[
            { value: 1, label: '2-pole' },
            { value: 2, label: '4-pole' },
          ]}
        />
        <Switch
          name="keyTracking"
          options={[
            { value: 1, label: '0%' },
            { value: 2, label: '50%' },
            { value: 3, label: '100%' },
          ]}
        />
        <Toggle
          name="egInt"
          label="EG Int"
        />
        <Toggle
          name="velocity"
          label="Velocity"
        />
      </Row>
    </Fieldset>
  )
}
