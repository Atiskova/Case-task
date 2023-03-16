import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 280px;

  @media screen and (min-width: 480px) {
    max-width: 440px;
    gap: 30px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    gap: 30px;
    max-width: 688px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
    max-width: 1200px;
  }
`;

export const Item = styled.li`
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);


  @media screen and (min-width: 768px) {
    padding: 30px 30px;
  }

  @media screen and (min-width: 1280px) {
    padding: 30px 20px;
  }

  &:hover {
    box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.img`
  max-width: 260px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;

  @media screen and (min-width: 480px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    max-width: 628px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 540px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  line-height: calc(24 / 20);
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
    font-weight: 700;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;

export const Span = styled.span`
  font-weight: 400;
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  outline: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 260px;

@media screen and (min-width: 480px) {
  min-width: 420px;
}

@media screen and (min-width: 768px) {
  gap: 15px;
  min-width: 628px;
}

@media screen and (min-width: 1280px) {
  gap: 20px;
  min-width: calc((100% - 120px) / 2);
  min-height: 500px;
  width: 540px;
}
`;
