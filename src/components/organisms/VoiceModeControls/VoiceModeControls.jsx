import Knob from '@/components/molecules/Knob';
import Fieldset from '@/components/molecules/Fieldset';
import Switch from '@/components/molecules/Switch';

export default function VoiceModeControls() {
  return (
    <Fieldset legend="Voice Mode">
      <Knob
        name="27"
        label="Voice Mode Depth"
      />
    </Fieldset>
  );
}
