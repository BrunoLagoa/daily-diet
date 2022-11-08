import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  min-height: 136px;

  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  border-radius: 8px;
  gap: 2px;

  background-color: ${({ theme }) => theme.COLORS.GREEN[100]};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY[700]};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY[700]};
  `}
`;
