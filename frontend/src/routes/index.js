import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Teste from "../pages/teste";


const Routing = () => {



    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/teste'} element={<Teste />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routing