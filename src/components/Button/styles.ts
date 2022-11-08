import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY[600] : theme.COLORS.WHITE[500]};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE[500]};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled(Feather).attrs<Props>(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE[500],
}))`
  margin-right: 12px;
`;
