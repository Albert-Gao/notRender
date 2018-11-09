import React, { memo } from 'react';
import { Flex } from 'rebass';
import Words, {
  IWordsProps,
} from './components/Words/Words';
import Avatar from './components/Avatar';

const Chat: React.SFC<IWordsProps> = ({
  text,
  callback,
}) => (
  <Flex mb={4} alignItems="center">
    <Avatar />
    <Words text={text} callback={callback} />
  </Flex>
);

export default memo(Chat);
