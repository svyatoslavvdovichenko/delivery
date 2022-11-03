import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Authorization } from "./pages/Authorization/Authorization";

const App: FC = () => {
  



  return (
    <Routes>
      <Route path="/authorization" element={<Authorization/>} />
      
      <Route path="*" element={<Navigate to="/authorization" replace />} />
    </Routes>
  );
}

export default App;
