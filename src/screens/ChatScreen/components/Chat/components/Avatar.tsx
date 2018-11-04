import React from 'react';
import { Image } from 'rebass';
import backButton from '../../../../../assets/backButton.svg';

const Avatar = () => (
  <Image
    src={backButton}
    bg="primary"
    height={50}
    mr={2}
    css={{
      minWidth: '50px',
    }}
  />
);

export default Avatar;
