import React from 'react';
import { UnderlineNav, Box } from '@primer/components';

function Nav() {
  return (
    <Box>
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
  );
}

export default Nav;
