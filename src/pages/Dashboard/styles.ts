import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #000000;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    max-width: 150px;
  }

  button {
    margin-left: auto;
    border: 0;
    background: transparent;

    svg {
      color: #0062ff;
      height: 20px;
      width: 20px;
    }
  }
`;

export const Profile = styled.div`
  margin-left: 80px;
  display: flex;
  align-items: center;

  div {
    margin-left: 6px;
    line-height: 24px;
    display: flex;
    flex-direction: column;

    span {
      color: #f4ede8;
    }

    strong {
      color: #0062ff;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
`;

export const HeaderBooks = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid #0062ff;
  margin-bottom: 64px;

  h1 {
    font-size: 42px;
    padding-bottom: 6px;
  }

  button {
    background: #222222;
    height: 48px;
    border-radius: 10px;
    border: 0;
    padding: 0 12px;
    color: #f5f5f5;
    width: 160px;
    font-weight: 500;
    margin-bottom: 8px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#222222')};
    }
  }
`;

export const ContentBooks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  p {
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background: #222222;
    color: #f5f5f5;
    padding: 16px;
    border-radius: 10px;
  }
`;

export const ContentBooksItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 16px 8px;
  width: 48%;
  border-radius: 10px;
  border: 2px solid #000000;
  color: #000000;
  background: #f5f5f5;

  h1 {
    font-size: 22px;
    padding-bottom: 8px;
  }

  div {
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

    span {
      margin-right: 20px;
    }
  }

  button {
    background: transparent;
    outline: 0;
    border: 0;
    font-size: 22px;
    margin-right: 8px;
    margin-top: 8px;
    color: #000000;
    transition: background-color 0.2s;

    &:hover {
      color: ${shade(0.2, '#000000')};
    }
  }
`;
