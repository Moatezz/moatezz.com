import HeaderTop from './components/HeaderTop';
import Bio from './components/Bio';
import { Box, ThemeProvider, BaseStyles } from '@primer/components';
function App() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" height="100vh">
          <HeaderTop />
          <Bio />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
