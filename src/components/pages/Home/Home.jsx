import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';

import { DEFAULT_VALUES } from '@/constants';
import { getPatches } from '@/api';
import { toMIDI } from '@/utils';
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
  const { data, isLoading } = useQuery('getPatches', () => getPatches());
  const methods = useForm({ defaultValues: DEFAULT_VALUES });
  const { output } = useMIDI();

  useEffect(() => {
    if (!data) return;

    methods.reset(toMIDI(data[0]));
  }, [methods.reset, data]);

  useEffect(() => {
    const subscription = methods.watch((values) => {
      Object.keys(values).forEach((name) => {
        const message = [176, name, values[name]];

        console.log(message);
        output.send(message);
      });
    });

    return () => subscription.unsubscribe();
  }, [methods.watch, output]);

  if (isLoading) return;

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
