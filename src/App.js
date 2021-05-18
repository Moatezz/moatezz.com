import HeaderTop from './components/HeaderTop';
import Bio from './components/Bio';
import Main from './components/Main';
import Nav from './components/Nav';
import { Box, ThemeProvider, BaseStyles, Grid } from '@primer/components';
import { useDeviceContext } from './Context';
import Mobile from './Mobile';
function App() {
  const device = useDeviceContext();
  console.log(device);
  return (
    <Box>
      {device === 'desktop' ? (
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
