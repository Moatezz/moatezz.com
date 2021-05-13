import React from 'react';
import { UnderlineNav, Box } from '@primer/components';

function Nav() {
  return (
    <Box>
      <UnderlineNav aria-label="Main" pl={400}>
        <UnderlineNav.Link href="#home" selected>
          Projects
        </UnderlineNav.Link>
        <UnderlineNav.Link href="#documentation">Packages</UnderlineNav.Link>
        <UnderlineNav.Link href="#support">WP Plugins</UnderlineNav.Link>
        <UnderlineNav.Link href="#support">Resume</UnderlineNav.Link>
      </UnderlineNav>
    </Box>
  );
}

export default Nav;
