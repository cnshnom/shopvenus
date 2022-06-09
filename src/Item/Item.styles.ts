import styled from 'styled-components';

export const Shelf = styled.div`
  
  flex: 1 1 0px;
  margin: 10px 0 0 10px;
  flex-grow: 1;
  flex-basis: 21%;
  margin: 15px;  /* and that, will result in a 10px gap */

  

`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 2px solid #FAEBD7;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
    background-color: #FAEBD7;
    color:#876D5A;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    max-width:300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  h3{
    text-align:center;
    vertical-align: bottom;
  }
  p{
    font-size:17px;
    text-align:center;
  }
`;