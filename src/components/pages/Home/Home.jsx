import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { DEFAULT_VALUES } from '@/constants';
import useMIDI from '@/hooks/useMIDI';
import Col from '@/components/atoms/Col';
import Form from '@/components/atoms/Form';
import VCO1Controls from '@/components/organisms/VCO1Controls';
import VCO2Controls from '@/components/organisms/VCO2Controls';
import VCO2ModulationControls from '@/components/organisms/VCO2ModulationControls';
import MixerControls from '@/components/organisms/MixerControls';
import FilterControls from '@/components/organisms/FilterControls';
import AmpEGControls from '@/components/organisms/AmpEGControls';
import EGControls from '@/components/organisms/EGControls';
import LFOControls from '@/components/organisms/LFOControls';
import DelayControls from '@/components/organisms/DelayControls';
import VoiceModeControls from '@/components/organisms/VoiceModeControls';
import Layout from '@/components/templates/Layout';

export default function Home() {
  const methods = useForm({ defaultValues: DEFAULT_VALUES });
  const { output } = useMIDI();

  useEffect(() => {
    const subscription = methods.watch((values, { name }) => {
      const message = [176, name, values[name]];

      console.log(message);
      output.send(message);
    });

    return () => subscription.unsubscribe();
  }, [methods.watch, output]);

  return (
    <Layout>
      <Form methods={methods}>
        <Col>
          <VCO1Controls />
          <VCO2Controls />
          <VCO2ModulationControls />
        </Col>
        <MixerControls />
        <FilterControls />
        <Col>
          <AmpEGControls />
          <EGControls />
          <LFOControls />
        </Col>
        <Col>
          <DelayControls />
          <VoiceModeControls />
        </Col>
      </Form>
    </Layout>
  );
}
