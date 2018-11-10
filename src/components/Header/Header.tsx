import React from 'react';
import { Flex, Box, Text } from 'rebass';
import GoBackButton from './components/GoBackButton';

const Header: React.FC<{ title: string }> = ({
  title,
}) => (
  <Flex
    justifyContent="center"
    bg="primary"
    p={2}
    width={1}
    css={{
      position: 'fixed',
      boxShadow: '0px 2.5px 7px 3px rgba(0,0,0,0.15)',
      zIndex: 2,
    }}
  >
    <Box width={1 / 4}>
      <GoBackButton />
    </Box>
    <Flex
      width={2 / 4}
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white" fontSize={2} fontWeight={4}>
        {title}
      </Text>
    </Flex>
    <Box width={1 / 4} />
  </Flex>
);

export default Header;
