import * as React from 'react';
import ProductHeroLayout from './ProductHeroLayout';
import { Button, Typography } from '@mui/material';
import backgroundImage from '../../static/themes/images/HeroWorkersPic.jpeg'

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
      Potencialize a sua empresa com a gente!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Melhoria em gerenciamento de recursos, automação de processos e informação.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        target='blank'
        href="https://youtu.be/vOn9g_-MAHI"
        sx={{ minWidth: 200 }}
      >
        Veja nosso video!
      </Button>
    </ProductHeroLayout>
  );
}
