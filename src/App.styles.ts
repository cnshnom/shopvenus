import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
//import logo from './logo.png';


export const Wrapper = styled.div`
  margin: 40px;
  position: relative;


  text-align: right;
  
`;
export const Subtitle = styled.div`
  margin: 40px;
  display: flex;

  justify-content:center; // centers in the flex direction and the default flex-direction is row
  align-items:center; // centers perpendicular to the flex direction
  font-size:13px;
  color:#949494;
  
`;
export const StyledButton = styled(IconButton)`
  display: block; 
  position: absolute;
  right: 0px;  
  top: 0px;
  p{
    font-size:15px;
  }
`;

export const Child = styled.div`
  
  display:flex;
  margin: auto;
  width: 100%;
  flex-wrap: wrap;
  

`;




export const LogoMark = styled.div`
  margin: 40px;
  display: flex;
  
  justify-content:center; // centers in the flex direction and the default flex-direction is row
  align-items:center; // centers perpendicular to the flex direction
  font-size:30px;
  

`;