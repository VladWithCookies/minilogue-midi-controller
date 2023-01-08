import Row from '@/components/atoms/Row';
import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';

export default function EGControls() {
  return (
    <Fieldset legend="EG">
      <Row>
        <Knob
          name="20"
          label="Attack"
        />
        <Knob
          name="21"
          label="Decay"
        />
        <Knob
          name="22"
          label="Sustain"
        />
        <Knob
          name="23"
          label="Release"
        />
      </Row>
    </Fieldset>
  )
}
