import React from 'react';
import ReactDOM from 'react-dom';
import {Navigation} from "./components/molecules/navigation/navigation";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './assets/index.css';
import {Home} from "./components/pages/home/home";
import {Footer} from "./components/molecules/footer/footer";
import styled from "styled-components";
import {Contact} from "./components/pages/contact/contact";
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const Main = styled.main`
  flex-grow: 1;
`

root.render(
    <BrowserRouter>
        <Navigation/>
        <Main>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Main>
        <Footer/>
    </BrowserRouter>
);