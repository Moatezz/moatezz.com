import { BorderBox, Link, Text } from '@primer/components';
import React from 'react';

function Instance() {
  return (
    <BorderBox m={3} p={2} fontSize={1}>
      <Link fontWeight={600}>Something</Link>
      <Text fontSize={1} as="p">
        This is a description for a certain project
      </Text>
      <Text fontSize={1} as="p">
        React
      </Text>
    </BorderBox>
  );
}

export default Instance;
