import { Box, Grid } from '@primer/components';
import React from 'react';
import Project from './Project/Project';

function Main() {
  return (
    <Box>
      <Grid gridTemplateColumns="1fr 1fr">
        <Project />
        <Project />
      </Grid>
    </Box>
  );
}

export default Main;
