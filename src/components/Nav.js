import React, { useState } from 'react';
import { UnderlineNav, Box, StyledOcticon, Flex } from '@primer/components';
import {
  NoteIcon,
  PackageIcon,
  PlugIcon,
  ProjectIcon,
} from '@primer/octicons-react';
import { BORDER } from '@primer/components/lib/constants';

function Nav() {
  const [active, setActive] = useState({
    projects: true,
    packages: false,
    wpPlugins: false,
    resume: false,
  });
  const handleSelection = (target) => {
    switch (target) {
      case 'Projects':
        setActive({
          projects: true,
          packages: false,
          wpPlugins: false,
          resume: false,
        });

        break;
      case 'Packages':
        setActive({
          projects: false,
          packages: true,
          wpPlugins: false,
          resume: false,
        });
        break;
      case 'WP Plugins':
        setActive({
          projects: false,
          packages: false,
          wpPlugins: true,
          resume: false,
        });
        break;
      case 'Resume':
        setActive({
          projects: false,
          packages: false,
          wpPlugins: false,
          resume: true,
        });
        break;
      default:
        setActive({
          projects: true,
          packages: false,
          wpPlugins: false,
          resume: false,
        });
        break;
    }
  };

  return (
    <Box pt="5vh">
      <UnderlineNav aria-label="Main" pl="30vw">
        <UnderlineNav.Link
          href="#home"
          selected={active.projects}
          onClick={() => {
            handleSelection('Projects');
          }}
        >
          <StyledOcticon icon={ProjectIcon} mr={2} />
          Projects
        </UnderlineNav.Link>
        <UnderlineNav.Link
          href="#documentation"
          selected={active.packages}
          onClick={() => {
            handleSelection('Packages');
          }}
        >
          <StyledOcticon icon={PackageIcon} mr={2} />
          Packages
        </UnderlineNav.Link>

        <UnderlineNav.Link
          href="#support"
          selected={active.wpPlugins}
          onClick={() => {
            handleSelection('WP Plugins');
          }}
        >
          <StyledOcticon icon={PlugIcon} mr={2} />
          WP Plugins
        </UnderlineNav.Link>

        <UnderlineNav.Link
          href="#support"
          selected={active.resume}
          onClick={() => {
            handleSelection('Resume');
          }}
        >
          <StyledOcticon icon={NoteIcon} mr={2} />
          Resume
        </UnderlineNav.Link>
      </UnderlineNav>
    </Box>
  );
}

export default Nav;
//gridTemplateColumns="1fr 1fr"
