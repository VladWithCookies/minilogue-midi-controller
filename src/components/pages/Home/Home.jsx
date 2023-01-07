import MasterControls from '@/components/organisms/MasterControls';
import VCOControls from '@/components/organisms/VCOControls';
import VCOModulationControls from '@/components/organisms/VCOModulationControls';
import MixerControls from '@/components/organisms/MixerControls';
import FilterControls from '@/components/organisms/FilterControls';
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
  </Layout>;
}
