import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import Logo from '../../static/themes/icons/Logo.webp';



const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Box
          component="img"
          src={ Logo }
          alt="Potencializa Logo"
          sx={{ pointerEvents: 'none', position: 'absolute', width: '50px', height: '50px' }}
        />
        <Typography variant='h3' sx={{ color: 'white' }}>
            {'Potencializa'}
        </Typography>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {'Entrar'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Registrar'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
