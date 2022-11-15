import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthorizationPage } from "./pages/AuthorizationPage/AuthorizationPage";

const Authorization: FC = () => (
  <Routes>
    <Route path="/authorization" element={<AuthorizationPage />} />

    <Route path="*" element={<Navigate to="/authorization" replace />} />
  </Routes>
);

export default Authorization;
