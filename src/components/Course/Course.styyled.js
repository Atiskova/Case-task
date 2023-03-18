import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 30px;
  }
`;

export const Sidebar = styled.div`
margin-left: auto;
margin-right: auto;

@media screen and (min-width: 480px) {
    max-width: 440px;
  }

@media screen and (min-width: 768px) {
    max-width: 688px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
  text-shadow: 1px 1px 1px #000;
  color: #f26b3a;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Image = styled.img`
  max-width: 280px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;

  border-radius: 10px;

  @media screen and (min-width: 480px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    max-width: 628px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 400px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;

export const Span = styled.span`
  font-weight: 400;
`;

export const LessonsWrapper = styled.div`
  margin-left: auto;
margin-right: auto;

@media screen and (min-width: 480px) {
    max-width: 440px;
  }

@media screen and (min-width: 768px) {
    max-width: 688px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 800px;
  }
`;

export const List = styled.ul`
  margin-top: 10px;
`;

export const LessonsTitle = styled.h2`
  margin-bottom: 10px;
`;

export const LockedText = styled.p`
  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  margin-bottom: 10px;
  background-color: #ff804e93;
  padding: 10px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;

export const UnlockedText = styled.p`
  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #31fc9d1f;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;