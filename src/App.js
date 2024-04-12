import * as React from 'react';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import TeamSection from './modules/views/TeamSection';
import './App.css';
import QuotesCarousel from './modules/views/QuotesCarousel';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <TeamSection />
      <QuotesCarousel />
    </React.Fragment>
  );
}

export default withRoot(Index);