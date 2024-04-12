import { Box, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Logo from '../../static/themes/icons/Logo.webp';
import wallet from '../../static/themes/icons/wallet.png';
import Engine from '../../static/themes/icons/engine.png';
import assistant from '../../static/themes/icons/assistant.png';


const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light', flexDirection: 'column' }}
    >
        <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '50px'}}>
          Nossos Pilares
        </Typography>
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src={ Logo }
          alt="Potencializa Logo"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -220, width: '120px', height: '120px' }}
        />
        <Grid container spacing={5} sx={{ marginTop: '10px' }}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={ wallet }
                alt="Wallet with green cash in it"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Otimização Financeira
              </Typography>
              <Typography variant="h5">
                {
                  'Utilizando Inteligência Artificial para otimizar a gestão de recursos, prevenir gastos desnecessários e impulsionar o aumento de lucros.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={ Engine }
                alt="A computer with some elements of engines"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Automação de processos
              </Typography>
              <Typography variant="h5">
                {
                  'Na automação de processos mecânicos, simplificamos fluxos de trabalhos complexos, reduzindo tempo gasto e aumentando produtividade.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={ assistant }
                alt="Assistant chat IA"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Assistente em IA
              </Typography>
              <Typography variant="h5">
                {
                'Integre as regras principais da empresa e criamos um assistente virtual para funcionarios e clientes '
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
