import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import GetDeliveries from "./hocs/GetDeliveries";
import DeliveryDetail from "./pages/DeliveryDetail/DeliveryDetail";
import DeliveryList from "./pages/DeliveryList/DeliveryList";

const DeliveryMain: FC = () => {
  return (
    <GetDeliveries>
      <Layout>
        <Routes>
          <Route path="/list" element={<DeliveryList />} />

          <Route path="/detail/:id" element={<DeliveryDetail />} />

          <Route path="*" element={<Navigate to="/list" replace />} />
        </Routes>
      </Layout>
    </GetDeliveries>
  );
};

export default DeliveryMain;
