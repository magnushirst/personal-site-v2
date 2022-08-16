import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../../molecules/header/header';
import Footer from '../../atoms/footer/footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const CustomMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${(props) => props.theme.colors.base};
`;
function BasicLayout({ children }) {
  return (
    <Container>
      <Header />
      <CustomMain>
        {children}
      </CustomMain>
      <Footer />
    </Container>
  );
}

export default BasicLayout;

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
