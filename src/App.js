import HeaderTop from './components/HeaderTop';
import Bio from './components/Bio';
import Main from './components/Main';
import Nav from './components/Nav';
import { Box, ThemeProvider, BaseStyles, Grid } from '@primer/components';
import Mobile from './Mobile';
import { useState, useEffect } from 'react';
function App() {
  const [deviceState, setDeviceState] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 1024) {
        return setDeviceState('mobile');
      } else if (window.innerWidth >= 1024) {
        return setDeviceState('desktop');
      }
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <Box>
      {deviceState === 'desktop' || deviceState >= 1024 ? (
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
      ) : (
        <Mobile />
      )}
    </Box>
  );
}

export default App;
