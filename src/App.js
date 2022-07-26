import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aiv from "./pages/Aiv";
import Credifacil from "./pages/Credifacil";
import Pasion from "./pages/Pasion";
import Ficred from "./pages/Ficred";
import Consulta from "./pages/Consulta";
import Pago from "./pages/Pago";
import Onix from "./pages/Onix";
import TuanaHome from "./pages/TuanaHome";


function App() {
  return (
    <BrowserRouter className="row">
      <Routes>
        <Route path="/" element={<TuanaHome/>}/>
        <Route path="/aiv" element={<Aiv/>}/>
        <Route path="/onix" element={<Onix/>}/>
        <Route path="/credifacil" element={<Credifacil/>}/>
        <Route path="/pasion" element={<Pasion/>}/>
        <Route path="/ficred" element={<Ficred/>}/>
        <Route path="/consulta" element={<Consulta/>}/>
        <Route path="/pago" element={<Pago/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
