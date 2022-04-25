import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header - Footer
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Pages 
import Inicial from "../pages";

function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Inicial/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Rotas;