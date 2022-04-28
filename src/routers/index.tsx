import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header - Footer
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Pages 
import Inicial from "../pages";
import Premium from "../pages/premium";
import Baixar from "../pages/baixar";

function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Inicial/>}/>
                <Route path="/premium" element={<Premium/>}/>
                <Route path="/baixar" element={<Baixar/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Rotas;