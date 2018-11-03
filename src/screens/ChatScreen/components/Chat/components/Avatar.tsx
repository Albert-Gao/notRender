import React from 'react';
import { Image } from 'rebass';
import backButton from '../../../../../assets/backButton.svg';

const Avatar = () => (
  <Image
    src={backButton}
    bg="primary"
    width={50}
    height={50}
    mr={2}
  />
);

export default Avatar;
