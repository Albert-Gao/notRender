import styled from 'styled-components';
import {
  // space,
  // color,
  width,
  height,
  // flex,
  // order,
  // alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  // fontSize,
  // fontFamily,
  // fontWeight,
  // textAlign,
  // lineHeight,
  // letterSpacing,
  // borders,
  // borderColor,
  // borderRadius,
  // buttonStyle,
  // boxShadow,
  // backgroundImage,
  // backgroundSize,
  // backgroundPosition,
  // backgroundRepeat,
  // opacity,
  // variant,
} from 'styled-system';
import { Card, Box as RebassBox } from 'rebass';

// const css = props => props.css;
// const themed = key => props => props.theme[key];
export const Box = styled(RebassBox)(height);
Box.propTypes = {
  ...height.propTypes,
};

export const FlexCard = styled(Card)(
  {
    display: 'flex',
  },
  width,
  height,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
);

FlexCard.propTypes = {
  ...width.propTypes,
  ...height.protoTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
};
