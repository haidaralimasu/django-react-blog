import {Link} from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
   border-radius: 50px;
    background: red;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
    transition: all 0.2s ease-in-out;
    background: black;
    color: #fff;
    text-decoration: none;
`;

export const Button2 = styled.button`
   border-radius: 50px;
    background: red;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: red;
    text-decoration: none;
`
export default GlobalStyle;

export const Button3 = styled(Link)`
   border-radius: 50px;
    background: red;
    white-space: nowrap;
    text-decoration: none;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: red;
    text-decoration: none;
`