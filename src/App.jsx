import Menu from "./Menu";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


function App() {
  return (
    <div>
      <div>
        <h2>BroCode</h2>
        <div>
      <Routes>
        <Route path="/Noodles" element={Noodles}/>
        <Route path="/Momo" element={MOMO}/>
        <Route path="/Pasta" element={Pasta}/>
        <Route path="/Chilli Potato" element={ChilliPotato}/>
        <Route path="/Drinks" element={Mocktails}/>
        <Route path="/Rice" element={Rice}/>
        <Route path="/Manchurian" element={Manchurian}/>
      </Routes>
      </div>
      <Route path="/Menu" element={Menu}/>
      </div>
    </div>
  );
}

export default App;
