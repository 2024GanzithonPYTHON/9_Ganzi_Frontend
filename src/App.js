import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nickname from "./account/Nickname";
import Gender from "./account/Gender";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nickname" element={<Nickname />} />
        <Route path="/gender" element={<Gender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
