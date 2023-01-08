import Row from '@/components/atoms/Row';
import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';

export default function AmpEGControls() {
  return (
    <Fieldset legend="Amp EG">
      <Row>
        <Knob
          name="16"
          label="Attack"
        />
        <Knob
          name="17"
          label="Decay"
        />
        <Knob
          name="18"
          label="Sustain"
        />
        <Knob
          name="19"
          label="Release"
        />
      </Row>
    </Fieldset>
  )
}
