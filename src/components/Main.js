import { Box, Grid } from '@primer/components';
import React from 'react';
import Instance from './Main/Instance';

function Main() {
  return (
    <Box>
      <Grid gridTemplateColumns="1fr 1fr">
        <Instance />
        <Instance />
      </Grid>
    </Box>
  );
}

export default Main;
