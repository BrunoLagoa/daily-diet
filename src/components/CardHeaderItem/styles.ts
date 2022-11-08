import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 16px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY[700]};
  `};
`;
