import React from 'react';
import { Box, Header, Avatar, StyledOcticon } from '@primer/components';
import { MarkGithubIcon } from '@primer/octicons-react/';
function HeaderTop() {
  return (
    <Box>
      <Header>
        <Header.Item>
          <Header.Link href="#" fontSize={2}>
            <StyledOcticon icon={MarkGithubIcon} size={32} mr={2} />
            <span>Moatezz Chabane</span>
          </Header.Link>
        </Header.Item>
        <Header.Item full>Menu</Header.Item>
        <Header.Item mr={0}>
          <Avatar
            src="https://github.com/octocat.png"
            size={20}
            square
            alt="@octocat"
          />
        </Header.Item>
      </Header>
    </Box>
  );
}

export default HeaderTop;
