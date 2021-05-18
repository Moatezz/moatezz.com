import { Box, Flex, Grid } from '@primer/components';
import React from 'react';
import ComingSoon from './ComingSoon';
import Instance from './Instance';

function Main() {
  return (
    <Box>
      {/* <Grid gridTemplateColumns="1fr 1fr">
        <Instance />
        <Instance />
      </Grid> */}
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <ComingSoon />
      </Flex>
    </Box>
  );
}

export default Main;
