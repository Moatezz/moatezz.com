import React from 'react';
import {
  Box,
  Avatar,
  BorderBox,
  Text,
  Link,
  Flex,
  StyledOcticon,
  Button,
} from '@primer/components';
import { LocationIcon, MailIcon, ClippyIcon } from '@primer/octicons-react';
import Wrapper from './styles/Wrapper';
import { FaLinkedin, FaGithub, FaWhatsapp, FaDiscord } from 'react-icons/fa';

function Bio() {
  return (
    <Wrapper>
      <BorderBox ml={3} mt={3} p={3}>
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
          <Button px={7} mt={3}>
            <Text fontWeight={100}>Contact me</Text>
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
          <StyledOcticon icon={ClippyIcon} size={16} />
        </Flex>
      </BorderBox>
    </Wrapper>
  );
}

export default Bio;
