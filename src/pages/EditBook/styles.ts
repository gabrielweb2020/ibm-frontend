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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  form {
    margin: 80px 0;
    width: 700px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 28px;
      font-size: 36px;
      text-align: center;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;
