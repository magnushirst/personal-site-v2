import styled from "styled-components";

const HeaderWrapper = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 0 2em 0 2em;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: white;
  color: rgb(81, 138, 176);
  @media (max-width: 768px) {
    padding: 0 1em 0 2em;
  }
`
const LinkWrapper = styled.div`
  display: flex;
  margin-left: auto;
`
const Chevron = styled.i`
  display: inline-block;
  position: relative;
  top: 0.2em;
  height: 1em;
  width: 1em;
  margin-left: 0.3em;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>');
  background-repeat: no-repeat
`
const SubNav = styled.div`
  position: absolute;
  top: 4em;
  width: 100%;
  height: 8em;
  padding: 1em 2em;
  left: 0;
  background-color: white;
  display: none;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4em;
  & > ul > li {
    padding: 0.4em 0;
  }
  & * > a:hover {
    text-shadow: 0 0 1px rgb(81, 138, 176);
  }
  & * > a:after {
    content: '';
    height: 1em;
    position: relative;
    width: 1em;
    margin-left: 0.5em;
    top: 0.15em;
    background-repeat: no-repeat;
    display: inline-block;
    background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg>');
  }
  &.mobile-nav {
    position: relative;
    height: inherit;
    top: 0;
  }
`
const Nested = styled.li`
  & > a {
    position: relative;
  }
  &:hover > div {
    border-top: 0.2em solid rgb(81, 138, 176);
    display: flex;
  }
`
const NavigationWrapper = styled.div`
`
const Navigation = styled.ul`
  & > li {
    height: 1.5em;
    display: inline-block;
    margin: 0 1em;
    & > a:after {
      display: block;
      content: '';
      border-bottom: solid 3px rgb(81, 138, 176);
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
  }
  & > li > a:hover:after {
    transform: scaleX(1);
  }
  & > li > a.active:hover:after {
    transform: scaleX(0);
  }
  & > li .active {
    border-bottom: 0.2em solid rgb(81, 138, 176);
  }
  @media (max-width: 768px) {
    display: none;
    &.mobile-nav {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1em;
      position: fixed;
      right: 0;
      width: 40vw;
      background-color: white;
      height: 100vh;
      top: 4.3em;
      padding: 1em;
      & > li {
        & > a {
          display: block;
        }
        & > a:after {
          position: relative;
          top: 0.4em;
        }
      }
    }
  }
`
const StyledH1 = styled.h1`
  padding: 1em 0;
  font-weight: 900;
  font-size: 1.4rem;
  display: inline-block;
  vertical-align: top;
`
const BurgerButton = styled.button`
  height: 2em;
  width: 2em;
  content: '';
  background-color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  display: none;
  margin-bottom: 1.2em;
  @media (max-width: 768px) {
    display: block;
  }
`