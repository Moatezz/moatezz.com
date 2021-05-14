import React, { useState } from 'react';
import { UnderlineNav, Box } from '@primer/components';

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
    <Box>
      <UnderlineNav aria-label="Main" pl={400}>
        <UnderlineNav.Link
          href="#home"
          selected={active.projects}
          onClick={() => {
            handleSelection('Projects');
          }}
        >
          Projects
        </UnderlineNav.Link>
        <UnderlineNav.Link
          href="#documentation"
          selected={active.packages}
          onClick={() => {
            handleSelection('Packages');
          }}
        >
          Packages
        </UnderlineNav.Link>
        <UnderlineNav.Link
          href="#support"
          selected={active.wpPlugins}
          onClick={() => {
            handleSelection('WP Plugins');
          }}
        >
          WP Plugins
        </UnderlineNav.Link>
        <UnderlineNav.Link
          href="#support"
          selected={active.resume}
          onClick={() => {
            handleSelection('Resume');
          }}
        >
          Resume
        </UnderlineNav.Link>
      </UnderlineNav>
    </Box>
  );
}

export default Nav;
