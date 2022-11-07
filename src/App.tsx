import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useUser } from "./hooks";
import { Authorization } from "./pages/Authorization/Authorization";
import DeliveryMain from "./DeliveryMain";

const App: FC = () => {
  const { isAuth } = useUser();

  if (isAuth) {
    return <DeliveryMain />
  }

  return (
    <Routes>
      <Route path="/authorization" element={<Authorization/>} />
      
      <Route path="*" element={<Navigate to="/authorization" replace />} />
    </Routes>
  );
}

export default App;
