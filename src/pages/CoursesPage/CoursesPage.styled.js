import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 20px;


  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`;

export const SectionTitle = styled.h1`
  padding: 10px 0;
  margin-top: 10px;
  text-align: center;
  font-size: 48px;
  text-transform: uppercase;
  color: #f26b3a;
  text-shadow: 3px 3px 4px #000;

  @media screen and (min-width: 768px) {
    padding: 15px 0;
  }
`;
