import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background:  black;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    cursor: pointer;
    color: #fff;
`
export const Icon = styled.div`
    position: absolute;
    top:  1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size:  2rem;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
    text-align: center;
`
export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &.active {
        color: red;
    }

    &:hover{
        color: red;
        justify-content: center;
        text-decoration:none;
    }
`
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
    transition: all 0.2s ease-in-out;
    background: red;
    color: black;
    text-decoration: none;
    }
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1f;
    grid-template-rows: repeat(6, 60px);
    text-align: center;
    justify-content: center;
    align-items: center; 

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px)
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
   
`