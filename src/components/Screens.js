import React from 'react';
import HeaderTop from './HeaderTop';
import Bio from './Bio';
import Main from './Main';
import Nav from './Nav';
import { Box, ThemeProvider, BaseStyles, Grid } from '@primer/components';

function Screens() {
  console.log(window.screen.orientation.type, window.screen.width);
  const screen = () => {
    let orientation = window.screen.orientation.type;
    let width = window.screen.width;
  };
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" minHeight="100vh" minWidth="100vw">
          <HeaderTop />
          <Nav />
          <Grid gridTemplateColumns="1fr 4fr" mx={150}>
            <Bio />
            <Main />
          </Grid>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default Screens;
