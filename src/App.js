import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Nickname from './account/Nickname';
import Gender from './account/Gender';
import WorkDetail from './account/Add/WorkDetail';
import ChildDetail from './account/Add/ChildDetail';
import { Child } from './account/Child';
import { Housework } from './account/Housework';
import OurToDo from './main/OurToDo';
import MyToDo from './main/MyToDo';
import AddChild from './account/Add/AddChild';
import AddPet from './account/Add/AddPet';

import InfoInput from './account/Add/InfoInput';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nickname" element={<Nickname />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/child" element={<Child />} />
        <Route path="/housework" element={<Housework />} />
        <Route path="/addwork" element={<WorkDetail />} />
        <Route path="/childdetail" element={<ChildDetail />} />
        <Route path="/workdetail" element={<WorkDetail />} />
        <Route path="/ourtodo" element={<OurToDo />} />
        <Route path="/mytodo" element={<MyToDo />} />
        <Route path="/infoinput" element={<InfoInput />} />
        <Route path="/addchild" element={<AddChild />} />
        <Route path="/addpet" element={<AddPet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
