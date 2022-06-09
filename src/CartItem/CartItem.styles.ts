import styled from 'styled-components';

export const Wrapper = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 2px solid #FAEBD7;
  padding-bottom: 10px;
  div {
    flex: 1;
  }
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;

