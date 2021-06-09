import styled from 'styled-components'
import { NavLink as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
    transition: 0.8s all ease;    
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        text-decoration:none;
        color: #fff;
    }
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
          display: block;
          position: absolute;
          top: 1rem;
          right: 1rem;
          transform: translate(-100, 60);
          font-size: 1.8rem;
          cursor: pointer;
          color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;
    margin-right: -22px;
    margin-bottom: 12px
    
    @media screen and (max-width: 768px) {
          display: none;

    }
`
export const NavItem = styled.li`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

        @media screen and (max-width: 768px) {
          display: none;

    }
`
export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin-top: 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    &.active {
        color: red;
    }
    &:hover {
        text-decoration: none;
        color: red;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
    transition: all 0.2s ease-in-out;
    background: red;
    color: #fff;
    text-decoration: none;
    }
`
