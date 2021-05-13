import HeaderTop from './components/HeaderTop';
import Bio from './components/Bio';
import Main from './components/Main/Main';
import { Box, ThemeProvider, BaseStyles } from '@primer/components';
function App() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" height="100vh">
          <HeaderTop />
          <Bio />
          <Main />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
