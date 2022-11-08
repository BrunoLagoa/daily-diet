import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
`;

export const ButtonTitle = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY[700]};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Content = styled.View`
  height: 100%;
  padding: 0 24px;
`;
