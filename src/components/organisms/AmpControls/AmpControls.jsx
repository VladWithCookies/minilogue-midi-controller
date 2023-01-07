import Fieldset from '@/components/molecules/Fieldset';
import Knob from '@/components/molecules/Knob';
import Switch from '@/components/molecules/Switch';
import Toggle from '@/components/molecules/Toggle';
import Row from '@/components/molecules/Row';

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
