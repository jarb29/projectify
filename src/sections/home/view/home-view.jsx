'use client';

import Stack from '@mui/material/Stack';
import { toast } from 'src/components/snackbar';
import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import { HomeZoneUI } from '../home-zone-ui';
import { HomeMinimal } from '../home-minimal';
import { HomePricing } from '../home-pricing';


import { HomeForDesigner } from '../home-for-designer';
import { HomeTestimonials } from '../home-testimonials';
import { HomeIntegrations } from '../home-integrations';
import { HomeAdvertisement } from '../home-advertisement';
import { HomeHugePackElements } from '../home-hugepack-elements';
import { HomeHighlightFeatures } from '../home-highlight-features';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      {toast.warning('Projectify', 
        {
                // style: { background: 'red' },
                duration: '6000',
                id: ' ',
                description: 'Born on 01/06/2024 as one of the best',
                closeButton: true,
                position:  'top-center'
              })
            }   

      <HomeHero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <HomeMinimal />

        {/* <HomeHugePackElements /> */}

        {/* <HomeForDesigner /> */}

        {/* <HomeHighlightFeatures /> */}

        {/* <HomeIntegrations /> */}

        {/* <HomePricing /> */}

        {/* <HomeTestimonials /> */}

        <HomeFAQs />

        <HomeZoneUI />

        <HomeAdvertisement />
      </Stack>
    </>
  );
}
