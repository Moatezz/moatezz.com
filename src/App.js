import HeaderTop from './components/HeaderTop';
import Bio from './components/Bio';
import Main from './components/Main';
import Nav from './components/Nav';
import { Box, ThemeProvider, BaseStyles, Grid } from '@primer/components';
function App() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" minHeight="100vh">
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

export default App;
