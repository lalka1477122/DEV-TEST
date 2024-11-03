"use client"
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Стили компонента навигации
const Nav = styled.nav`
  background-color: #f8f9fa;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
`;

// Стили списка навигации
const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

// Стили элемента списка
const NavItem = styled.li`
  margin: 0 10px;
`;

// Стили ссылки
const NavLink = styled(Link)`
  text-decoration: none;
  color: #0070f3;
  font-weight: bold;

  &:hover {
    color: #0056b3;
  }
`;

// Стили для крайних элементов
const navLeft = css`
  margin-right: auto;
`;

const navRight = css`
  margin-left: auto;
`;

export function Top_bar() {
    return (
        <Nav>
            <NavList>
                <NavItem css={navLeft}>
                    <NavLink href="/">Главная</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">О нас</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contact">Контакты</NavLink>
                </NavItem>
                <NavItem css={navRight}>
                    <NavLink href="/account">Аккаунт</NavLink>
                </NavItem>
            </NavList>
        </Nav>
    );
}
