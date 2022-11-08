import theme from 'src/theme';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 14px 16px 14px 12px;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY[300]};
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY[700]};
  `}
`;

export const Divider = styled.View`
  height: 14px;
  width: 1px;
  margin: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY[300]};
  background-color: red;
`;

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY[700]};
  `}
`;

export const Status = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  background-color: ${({ theme }) => theme.COLORS.GREEN[300]};
`;
