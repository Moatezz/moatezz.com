import React from 'react';
import { Box, Avatar, BorderBox } from '@primer/components';
import WrapAvatar from './styles/WrapAvatar';
import Wrapper from './styles/Wrapper';
function Bio() {
  return (
    <Wrapper>
      <BorderBox>
        <WrapAvatar>
          <Avatar
            className="avatar"
            src="https://avatars.githubusercontent.com/u/72275419?v=4"
            size="250"
          />
        </WrapAvatar>
      </BorderBox>
    </Wrapper>
  );
}

export default Bio;
