import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  width: 100%;
  min-height: 136px;

  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY[600],
}))``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  margin-right: 32px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY[600]};
  `}
`;
