import React, { useState } from 'react';
import HeaderTop from './components/HeaderTop';
import Main from './components/Main';
import {
  ThemeProvider,
  BaseStyles,
  UnderlineNav,
  Box,
  StyledOcticon,
  Avatar,
  BorderBox,
  Text,
  Link,
  Flex,
  Button,
} from '@primer/components';
import {
  NoteIcon,
  PackageIcon,
  PlugIcon,
  ProjectIcon,
  LocationIcon,
  MailIcon,
  ClippyIcon,
} from '@primer/octicons-react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaDiscord } from 'react-icons/fa';

/////////////////// BIO ///////////////

function Bio() {
  return (
    <Box ml={3} p={3}>
      <Flex flexDirection="column" alignItems="center">
        <BorderBox borderRadius={100}>
          <Avatar
            className="avatar"
            src="https://avatars.githubusercontent.com/u/72275419?v=4"
            size="200"
          />
        </BorderBox>
        <Box width="fit-content">
          <Text lineHeight={0.6} as="h2">
            Moatezz Chabane
          </Text>
        </Box>
        <Box width="fit-content">
          <Text my={2} lineHeight={0.2} as="p">
            Full Stack Web Developer
          </Text>
        </Box>
        <Link muted href="https://www.moatezz.com">
          www.moatezz.com
        </Link>
        <Button px={10} mt={3}>
          Contact me
        </Button>
      </Flex>
      <BorderBox py={2} mt={4} borderStyle="none" borderX="1px solid black">
        <Flex flexDirection="row" justifyContent="space-around">
          <Link href="#">
            <FaLinkedin color="#6a737d" size={32} />
          </Link>
          <Link href="#">
            <FaGithub color="#6a737d" size={32} />
          </Link>
          <Link href="#">
            <FaWhatsapp color="#6a737d" size={32} />
          </Link>
          <Link href="#">
            <FaDiscord color="#6a737d" size={32} />
          </Link>
        </Flex>
      </BorderBox>
      <Flex mt={3} flexDirection="row" alignItems="center">
        <StyledOcticon icon={LocationIcon} size={24} pr={2} />
        <Text my={0} as="p">
          Algiers, Algeria
        </Text>
      </Flex>
      <Flex my={1} flexDirection="row" alignItems="center">
        <StyledOcticon icon={MailIcon} size={24} pr={2} />
        <Text my={0} as="p" pr={2}>
          moatezzchabane@gmail.com
        </Text>
        <StyledOcticon aria-label="Copy" icon={ClippyIcon} size={20} />
      </Flex>
    </Box>
  );
}

/////////////////// BIO ///////////////

/////////////////// MAIN ///////////////

/////////////////// MAIN ///////////////

/////////////////// NAV ///////////////
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
    <Flex flexDirection="row" justifyContent="center">
      <UnderlineNav aria-label="Main">
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
    </Flex>
  );
}

/////////////////// NAV ///////////////

function Mobile() {
  return (
    <ThemeProvider colorMode="night">
      <BaseStyles>
        <Box bg="bg.primary" minHeight="100vh" minWidth="100vw">
          <HeaderTop />
          <Bio />
          <Nav />
          <Main />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default Mobile;
