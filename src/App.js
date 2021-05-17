import HeaderTop from './components/HeaderTop';
import Bio from './components/Bio';
import Main from './components/Main';
import Nav from './components/Nav';
import { Box, ThemeProvider, BaseStyles, Grid } from '@primer/components';
import { useEffect, useState } from 'react';
function App() {
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [width]);
  //console.log(width);
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box
          bg="bg.primary"
          minHeight="100vh"
          minWidth="100vw"
          onResize={console.log(window.outerWidth)}
        >
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
