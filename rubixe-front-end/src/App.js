import { createContext, useState } from "react";
import "./App.css";
import NavBar from "./components/utilities/NavBar/NavBar";
import Routers from "./components/utilities/Routers/Routers";

export const BtnTextContext = createContext();

function App() {
  const [btnText, setBtnText] = useState("Login");

  return (
    <BtnTextContext.Provider value={[btnText, setBtnText]}>
      <div>
        <Routers />
        <NavBar />
      </div>
    </BtnTextContext.Provider>
  );
}

export default App;
