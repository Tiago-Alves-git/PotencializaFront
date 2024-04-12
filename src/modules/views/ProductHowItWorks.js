import { Box, Typography } from '@mui/material';
import * as React from 'react';
import Page from '../../dashboard/page';

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden', flexDirection: "column" }}
    >
      <Typography variant='h4' sx={{ alignSelf: 'center', marginBottom: '50px' }}>
        Muito além do financeiro
      </Typography>
      <Page />
    </Box>
  );
}

export default ProductHowItWorks;
