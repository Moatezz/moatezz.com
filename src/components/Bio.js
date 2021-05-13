import React from 'react';
import { Box, Avatar, BorderBox, Text, Link } from '@primer/components';
import { LocationIcon, MailIcon, ClippyIcon } from '@primer/octicons-react';
import WrapAvatar from './styles/WrapAvatar';
import Wrapper from './styles/Wrapper';
import { FaLinkedin, FaGithub, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import WrapPadding from './styles/WrapPadding';
function Bio() {
  return (
    <Wrapper>
      <BorderBox ml={3} mt={3} p={3}>
        <WrapAvatar>
          <BorderBox borderRadius={100}>
            <Avatar
              className="avatar"
              src="https://avatars.githubusercontent.com/u/72275419?v=4"
              size="200"
            />
          </BorderBox>
        </WrapAvatar>
        <Text lineHeight={0.6} as="h2">
          Moatezz Chabane
        </Text>
        <Text my={2} lineHeight={0.2} as="p">
          Full Stack Web Developer
        </Text>
        <Link lineHeight={0.1} href="https://www.moatezz.com">
          www.moatezz.com
        </Link>
        <BorderBox>
          <WrapPadding>
            <FaLinkedin />
            <FaGithub />
            <FaWhatsapp />
            <FaDiscord />
          </WrapPadding>
        </BorderBox>
        <Box>
          <LocationIcon size={16} />
          <Text as="p">Algiers, Algeria</Text>
        </Box>
        <Box>
          <MailIcon size={16} />
          <Text as="p">moatezzchabane@gmail.com</Text>
          <BorderBox>
            <ClippyIcon aria-label="Copy Email address" size={16} />
          </BorderBox>
        </Box>
      </BorderBox>
    </Wrapper>
  );
}

export default Bio;
