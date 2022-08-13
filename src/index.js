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
const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = styled.main`
  flex-grow: 1;
`

root.render(
    <BrowserRouter>
        <Navigation/>
        <Main>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
        </Main>
        <Footer/>
    </BrowserRouter>
);