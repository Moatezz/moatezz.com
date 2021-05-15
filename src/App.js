import HeaderTop from './components/HeaderTop';
import Bio from './components/Bio';
import Main from './components/Main/Main';
import Nav from './components/Nav';
import { Box, ThemeProvider, BaseStyles, Grid } from '@primer/components';
function App() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" minHeight="100vh">
          <HeaderTop />
          <Grid gridTemplateColumns="repeat(2,auto)">
            <Bio />
            <Box>
              <Nav />
              <Main />
            </Box>
          </Grid>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
