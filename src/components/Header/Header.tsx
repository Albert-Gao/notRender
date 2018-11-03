import React from 'react';
import { Flex, Box, Text } from 'rebass';
import GoBackButton from './components/GoBackButton';

const Header: React.SFC<{ title: string }> = ({
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
    <Box width={1 / 5}>
      <GoBackButton />
    </Box>
    <Flex
      width={3 / 5}
      alignItems="center"
      justifyContent="center"
    >
      <Text color="white" fontSize={2} fontWeight={4}>
        {title}
      </Text>
    </Flex>
    <Box width={1 / 5} />
  </Flex>
);

export default Header;
