import { BorderBox, Link, Text } from '@primer/components';
import React from 'react';

function Instance() {
  return (
    <BorderBox>
      <Link>Something</Link>
      <Text as="p">This is a description for a certain project</Text>
      <Text as="p">React</Text>
    </BorderBox>
  );
}

export default Instance;
