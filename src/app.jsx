import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
import Header from './components/organisms/header/header';
import './assets/index.css';
import Home from './components/pages/home/home';
import Footer from './components/atoms/footer/footer';
import Contact from './components/pages/contact/contact';
import NotFound from './components/pages/notFound/notFound';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Main = styled.main`
  flex-grow: 1;
`;

root.render(
  <BrowserRouter>
    <Header />
    <Main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Main>
    <Footer />
  </BrowserRouter>,
);
