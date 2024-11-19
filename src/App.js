import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Nickname from './account/Nickname';
import Gender from './account/Gender';
import WorkDetail from './account/WorkDetail';
import ChildDetail from './account/ChildDetail';
import { Child } from './account/Child';
import { Housework } from './account/Housework';
import OurToDo from './main/OurToDo';
import MyToDo from './main/MyToDo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nickname" element={<Nickname />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/child" element={<Child />} />
        <Route path="/housework" element={<Housework />} />
        <Route path="/workdetail" element={<WorkDetail />} />
        <Route path="/childdetail" element={<ChildDetail />} />
        <Route path="/ourtodo" element={<OurToDo />} />
        <Route path="/mytodo" element={<MyToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
