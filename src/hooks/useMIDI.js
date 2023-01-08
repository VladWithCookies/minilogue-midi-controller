import { useEffect, useState } from 'react';

export default function useMIDI() {
  const [input, setInput] = useState();
  const [output, setOutput] = useState();

  useEffect(() => {
    if (navigator.requestMIDIAccess) {
      const onMIDISuccess = (MIDIAccess) => {
        for (const input of MIDIAccess.inputs.values()) {

          input.onmidimessage = (message) => {
            if (message.data[0] !== 248) {
              console.log(message);
            }
          }

          setInput(input);
        }

        for (const output of MIDIAccess.outputs.values()) {
          setOutput(output);
        }
      }

      const onMIDIFailure = () => {
        alert('Could not access your MIDI devices.');
      }

      navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    } else {
      alert('WebMIDI is not supported in this browser.');
    }
  }, []);

  return { input, output };
}
