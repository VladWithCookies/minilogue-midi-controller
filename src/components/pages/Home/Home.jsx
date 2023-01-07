import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Col from '@/components/atoms/Col';
import Form from '@/components/atoms/Form';
import MasterControls from '@/components/organisms/MasterControls';
import VCOControls from '@/components/organisms/VCOControls';
import VCOModulationControls from '@/components/organisms/VCOModulationControls';
import MixerControls from '@/components/organisms/MixerControls';
import FilterControls from '@/components/organisms/FilterControls';
import AmpControls from '@/components/organisms/AmpControls';
import LFOControls from '@/components/organisms/LFOControls';
import DelayControls from '@/components/organisms/DelayControls';
import VoiceModeControls from '@/components/organisms/VoiceModeControls';
import Layout from '@/components/templates/Layout';

export default function Home() {
  const methods = useForm();

  useEffect(() => {
    const subscription = methods.watch(methods.handleSubmit(console.log));

    return () => subscription.unsubscribe();
  }, [methods.watch, methods.handleSubmit])

  return (
    <Layout>
      <Form methods={methods}>
        <MasterControls />
        <Col>
          <VCOControls name="1" legend="VCO1" />
          <VCOControls name="2" legend="VCO2" />
          <VCOModulationControls />
        </Col>
        <MixerControls />
        <FilterControls />
        <Col>
          <AmpControls name="ampEG" legend="Amp EG" />
          <AmpControls name="EG"  legend="EG" />
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
