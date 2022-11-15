import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/contents/Home";
import Login from "./pages/log/Login";
import Register from "./pages/log/Register";
import Inputs from "./pages/contents/Inputs"
import Outputs from "./pages/contents/Outputs"
import GlobalStyle from "./styles/globalStyle";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/sign-in' element={ <Login /> } />
                    <Route path='/sign-up' element={ <Register /> } />
                    <Route path='/' element={ <Home /> } />
                    <Route path='/new-input' element={ <Inputs /> } />
                    <Route path='/new-output' element={ <Outputs /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}