import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";


const Routing = () => {



    return (
        <BrowserRouter>
            <Routes>
                <Route index path={'/home'} element={<Home/>} />
                <Route path={'/home/edit/:id'} element={<Home/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routing