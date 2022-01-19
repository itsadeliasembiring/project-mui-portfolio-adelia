import React from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import foto from '../img/foto.png';

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={foto} alt="foto" />
        </Toolbar>
      </Container>
    </>
  );
}
