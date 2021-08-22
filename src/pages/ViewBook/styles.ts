import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #000000;
    display: flex;

    div {
      display: flex;
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      align-items: center;
      justify-content: center;

      div.arrow {
        width: 5%;
        justify-content: flex-start;

        svg {
          color: #0062ff;
          width: 36px;
          height: 36px;
        }
      }

      div.logo {
        width: 95%;
        justify-content: center;
        margin-left: -80px;

        img {
          max-width: 150px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  padding: 64px 0;

  h1 {
    font-size: 32px;
    padding-bottom: 6px;
    border-bottom: 2px solid #0062ff;
    margin-bottom: 32px;
  }

  span {
    display: flex;
    font-size: 16px;

    svg {
      font-size: 18px;
      margin-right: 4px;
      color: #0062ff;

      & + svg {
        margin-left: 18px;
      }
    }

    p {
      margin-right: 20px;
    }
  }

  section {
    display: flex;
    margin-top: 16px;

    p {
      font-size: 18px;
      color: #666;
    }
  }
`;
