import Row from '@/components/atoms/Row';
import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';

export default function DelayControls() {
  return (
    <Fieldset legend="Delay">
      <Row>
        <Knob
          name="hiPassCutoff"
          label="Hi Pass Cutoff"
        />
        <Knob
          name="time"
          label="Time"
        />
        <Knob
          name="feedback"
          label="Feedback"
        />
      </Row>
    </Fieldset>
  )
}
