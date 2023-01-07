import MasterControls from '@/components/organisms/MasterControls';
import VCOControls from '@/components/organisms/VCOControls';
import VCOModulationControls from '@/components/organisms/VCOModulationControls';
import MixerControls from '@/components/organisms/MixerControls';
import FilterControls from '@/components/organisms/FilterControls';
import AmpControls from '@/components/organisms/AmpControls';
import LFOControls from '@/components/organisms/LFOControls';
import DelayControls from '@/components/organisms/DelayControls';
import Layout from '@/components/templates/Layout';

export default function Home() {
  return <Layout>
    <MasterControls />
    <div>
      <VCOControls name="1" legend="VCO1" />
      <VCOControls name="2" legend="VCO2" />
      <VCOModulationControls />
    </div>
    <MixerControls />
    <FilterControls />
    <div>
      <AmpControls name="ampEG" legend="Amp EG" />
      <AmpControls name="EG"  legend="EG" />
      <LFOControls />
    </div>
    <div>
      <DelayControls />
      {/* <VoiceModeControls /> */}
    </div>
  </Layout>;
}
