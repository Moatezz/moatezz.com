import React from 'react';
import { Box, Avatar, BorderBox, Text } from '@primer/components';
import { LocationIcon, MailIcon, ClippyIcon } from '@primer/octicons-react';
import WrapAvatar from './styles/WrapAvatar';
import Wrapper from './styles/Wrapper';
import { FaLinkedin, FaGithub, FaWhatsapp, FaDiscord } from 'react-icons/fa';
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
        <Text as="h2">Moatezz Chabane</Text>
        <Text as="p">Full Stack Web Developer</Text>
        <BorderBox>
          <FaLinkedin />
          <FaGithub />
          <FaWhatsapp />
          <FaDiscord />
        </BorderBox>
        <Box>
          <LocationIcon size={16} />
          <Text as="p">Algiers, Algeria</Text>
        </Box>
        <Box>
          <MailIcon size={16} />
          <Text as="p">moatezzchabane@gmail.com</Text>
          <BorderBox>
            <ClippyIcon size={16} />
          </BorderBox>
        </Box>
      </BorderBox>
    </Wrapper>
  );
}

export default Bio;
