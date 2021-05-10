import { Box, ThemeProvider, BaseStyles, Button } from '@primer/components';
function App() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" height="100vh">
          <Button>Hello</Button>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
