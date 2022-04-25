import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages 
import Inicial from "../pages";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicial/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;