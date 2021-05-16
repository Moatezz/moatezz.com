import React from 'react';
import HeaderTop from './HeaderTop';
import Bio from './Bio';
import Main from './Main';
import Nav from './Nav';
import { Box, ThemeProvider, BaseStyles, Grid } from '@primer/components';

function Screens() {
  const orientation = window.screen.orientation.type;
  const width = window.screen.width;
  const mobile = orientation === 'portrait-primary' && width < 480;
  const desktop = orientation === 'landscape-primary' && width > 1200;
  const tablet =
    orientation === 'portrait-primary' && width < 800 && width > 480;
  console.log('mobile: ' + mobile, 'tablet: ' + tablet, width);
  if (desktop) {
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
  } else if (mobile) {
    return (
      <ThemeProvider colorMode="night">
        <BaseStyles>
          <Box bg="bg.primary" minHeight="100vh" minWidth="100vw">
            <HeaderTop />
            <Nav />
            <Grid gridTemplateColumns="1fr 4fr" mx={150}>
              <Main />
            </Grid>
          </Box>
        </BaseStyles>
      </ThemeProvider>
    );
  } else if (tablet) {
    return (
      <ThemeProvider colorMode="night">
        <BaseStyles>
          <Box bg="bg.primary" minHeight="100vh" minWidth="100vw">
            <HeaderTop />
            <Nav />
            <Grid gridTemplateColumns="1fr 4fr" mx={150}>
              <Bio />
            </Grid>
          </Box>
        </BaseStyles>
      </ThemeProvider>
    );
  } else {
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" minHeight="100vh" minWidth="100vw">
          <HeaderTop />
          <Nav />
          <Grid gridTemplateColumns="1fr 4fr" mx={150}></Grid>
        </Box>
      </BaseStyles>
    </ThemeProvider>;
  }
}
export default Screens;
