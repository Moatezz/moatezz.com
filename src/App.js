import {
  Box,
  ThemeProvider,
  BaseStyles,
  UnderlineNav,
} from '@primer/components';
function App() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" height="100vh">
          <UnderlineNav aria-label="Main">
            <UnderlineNav.Link href="#home" selected>
              Home
            </UnderlineNav.Link>
            <UnderlineNav.Link href="#documentation">
              Documentation
            </UnderlineNav.Link>
            <UnderlineNav.Link href="#support">Support</UnderlineNav.Link>
          </UnderlineNav>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
