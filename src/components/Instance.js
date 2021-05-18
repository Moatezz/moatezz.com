import { BorderBox, Flex, Link, Text } from '@primer/components';
import React from 'react';
import skillsIcons from './data/skillsIcons.json';
import projects from './data/projects.json';
import somethinging from './data/assets/react.svg';

function Instance() {
  const something = projects.something;
  const iconsLink = (instance) => {
    const targetedSkill = projects[instance].skills;
    return String(skillsIcons[targetedSkill]);
  };
  const target = somethinging;
  console.log(target);
  return (
    <BorderBox m={3} p={3} fontSize={1}>
      <Link fontWeight={600}>Something</Link>
      <Text fontSize={1} as="p">
        {something.description}
      </Text>
      <Flex flexDirection="row" alignItems="center">
        <img src={`${target}`} height="25px" alt="skill icon" />
        <Text fontSize={1} as="p">
          React
        </Text>
      </Flex>
    </BorderBox>
  );
}

export default Instance;
