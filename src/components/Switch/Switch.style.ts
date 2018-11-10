import {
  styled,
  ifProp,
} from '../../styles/styledLib';

interface ITextSpanProp {
  isChecked: boolean;
}

const TEXT_MARGIN = '12px';

const FADE_COLOR = '#95a5a6';

export const TrueText = styled.span<ITextSpanProp>`
  color: ${ifProp('isChecked', 'black', FADE_COLOR)};
  margin-left: ${TEXT_MARGIN};
  transition: color 0.4s linear;
`;

export const FalseText = styled.span<ITextSpanProp>`
  color: ${ifProp('isChecked', FADE_COLOR, 'black')};
  margin-right: ${TEXT_MARGIN};
  transition: color 0.4s linear;
`;
