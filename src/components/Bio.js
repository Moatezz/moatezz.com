import React from 'react';
import { Box, Avatar } from '@primer/components';
import WrapAvatar from './styles/WrapAvatar';
function Bio() {
  return (
    <Box>
      <WrapAvatar>
        <Avatar
          className="avatar"
          src="https://avatars.githubusercontent.com/u/72275419?v=4"
          size="250"
        />
      </WrapAvatar>
    </Box>
  );
}

export default Bio;
