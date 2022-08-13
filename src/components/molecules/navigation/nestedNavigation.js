import styled from "styled-components";
import React, {useState} from "react";
import img from '../../../assets/chevron-down.svg';

const Wrapper = styled.li`
  & > a.active:after{
    rotate: 180deg;
  }
  & > a:after {
    transition: rotate 100ms ease;
    display: inline-block;
    content: ' ';
    background-image: url(${img});
    background-size: 1em 1em;
    background-repeat: no-repeat;
    height: 1em;
    width: 1em;
    position: fixed;
    margin-left: 1em;
  }
`
const SubNav = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5em;
  height: 0px;
  overflow: hidden;
  &.active {
    margin-top: 0.5em;
    height: 100%;
    padding: 0.5em;
    transition: height 100ms ease;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
`
export function NestedNavigation ({ title, children}) {
    const [isOpen, setOpen] = useState(false);
    return (
        <Wrapper>
            <a href={'#'} onClick={() => setOpen(!isOpen)} className={isOpen ? 'active' : ''}>{ title }</a>
            <SubNav className={isOpen ? 'active' : ''}>
                { children }
            </SubNav>
        </Wrapper>
    )
}