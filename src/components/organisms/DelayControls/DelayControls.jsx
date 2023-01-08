import Row from '@/components/atoms/Row';
import Fieldset from '@/components/molecules/Fieldset';
import Switch from '@/components/molecules/Switch';
import Knob from '@/components/molecules/Knob';

export default function DelayControls() {
  return (
    <Fieldset legend="Delay">
      <Row>
        <Knob
          name="29"
          label="Hi Pass Cutoff"
        />
        <Knob
          name="30"
          label="Time"
        />
        <Knob
          name="31"
          label="Feedback"
        />
        <Switch
          name="88"
          label="Output Routing"
          options={[
            { value: 127, label: 'Post Filter' },
            { value: 64, label: 'Pre Filter' },
            { value: 0, label: 'Off' },
          ]}
        />
      </Row>
    </Fieldset>
  )
}
