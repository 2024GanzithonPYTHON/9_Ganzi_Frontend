import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nickname from "./account/Nickname";
import Gender from "./account/Gender";
import { Child } from "./account/Child";
import { Housework } from "./account/Housework";
import Welcome from "./account/Welcome";
import Housework2 from "./account/Housework2";
import Housework3 from "./account/Housework3";
import { Ready } from "./account/Ready";
import AddMember from "./account/AddMember";
import Join from "./account/Join";
import Invite from "./account/Invite";
import Contribution from "./account/Contribution";
import Register from "./account/Register";
import RedirectHandler from "./account/RedirectHandler";
import Schedule from "./account/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nickname" element={<Nickname />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/child" element={<Child />} />
        <Route path="/housework" element={<Housework />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/housework2" element={<Housework2 />} />
        <Route path="/housework3" element={<Housework3 />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/addmember" element={<AddMember />} />
        <Route path="/join" element={<Join />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<RedirectHandler />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
