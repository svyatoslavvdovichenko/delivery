import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import GetDeliveries from "./hocs/GetDeliveries";
import DeliveryDetail from "./pages/DeliveryDetail/DeliveryDetail";
import DeliveryList from "./pages/DeliveryList/DeliveryList";

const DeliveryMain: FC = () => (
  <GetDeliveries>
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to="/list" replace />} />

        <Route path="/list" element={<DeliveryList />} />

        <Route path="/detail/:id" element={<DeliveryDetail />} />
      </Routes>
    </Layout>
  </GetDeliveries>
);

export default DeliveryMain;
