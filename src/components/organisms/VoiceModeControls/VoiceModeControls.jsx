import Knob from '@/components/molecules/Knob';
import Fieldset from '@/components/molecules/Fieldset';
import Switch from '@/components/molecules/Switch';

export default function VoiceModeControls() {
  return (
    <Fieldset legend="Voice Mode">
      <Knob
        name="voiceModeDepth"
        label="Voice Mode Depth"
      />
      <Switch
        name="voiceMode"
        label="Voice Mode"
        orientation="horizontal"
        options={[
          { value: 1, label: 'Poly' },
          { value: 2, label: 'Duo' },
          { value: 3, label: 'Unison' },
          { value: 4, label: 'Mono' },
          { value: 5, label: 'Chord' },
          { value: 6, label: 'Delay' },
          { value: 7, label: 'Arp' },
          { value: 8, label: 'Sidechain' },
        ]}
      />
    </Fieldset>
  );
}
