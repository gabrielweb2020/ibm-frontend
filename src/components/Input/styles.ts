import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #000000;
  color: #000000;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 14px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #0062ff;
      border-color: #0062ff;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #0062ff;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000000;

    &::placeholder {
      color: #000000;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
