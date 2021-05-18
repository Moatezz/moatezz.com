import HeaderTop from './components/HeaderTop';
import Bio from './components/Bio';
import Main from './components/Main';
import Nav from './components/Nav';
import { Box, ThemeProvider, BaseStyles, Grid } from '@primer/components';
import { useDeviceContext } from './Context';
function App() {
  const device = useDeviceContext();
  let gtd = '1fr 4fr';
  let mx = 150;
  function defections() {
    if (device == 'mobile') return (gtd = '1fr'), (mx = '10');
  }

  console.log(device);

  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" minHeight="100vh" minWidth="100vw">
          <HeaderTop />

          <Nav />

          <Grid gridTemplateColumns={gtd} mx={mx}>
            <Bio />

            <Main />
          </Grid>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
