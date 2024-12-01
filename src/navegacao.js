import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import Chocolates from "./pages/chocolates";
import Contatos from "./pages/contatos";


export default function Navigation () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/chocolates" element={<Chocolates/>}/>
                <Route path="/contato" element={<Contatos/>}/>
            </Routes>
        </BrowserRouter>
    )
}