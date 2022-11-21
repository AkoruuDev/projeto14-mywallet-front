// tools
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";

// pages
import Home from "./pages/contents/Home";
import Login from "./pages/log/Login";
import Register from "./pages/log/Register";
import Inputs from "./pages/contents/Inputs"
import Outputs from "./pages/contents/Outputs"
import SeeMore from "./pages/contents/SeeMore";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Login /> } />
                    <Route path='/sign-up' element={ <Register /> } />
                    <Route path='/home' element={ <Home /> } />
                    <Route path='/new-input' element={ <Inputs /> } />
                    <Route path='/new-output' element={ <Outputs /> } />
                    <Route path='/item/:ITEM_ID' element={ <SeeMore /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}