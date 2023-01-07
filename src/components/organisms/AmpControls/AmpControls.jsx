import Row from '@/components/atoms/Row';
import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';

export default function AmpControls({ name, legend }) {
  return (
    <Fieldset legend={legend}>
      <Row>
        <Knob
          name="attack"
          label="Attack"
        />
        <Knob
          name="decay"
          label="Decay"
        />
        <Knob
          name="sustain"
          label="Sustain"
        />
        <Knob
          name="release"
          label="Release"
        />
      </Row>
    </Fieldset>
  )
}
