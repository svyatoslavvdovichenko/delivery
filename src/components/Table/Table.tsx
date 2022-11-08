import { Table as AntdTable, Typography } from "antd";
import React from "react";
import { columns } from "../../constants";
import { useDeliveries } from "../../hooks";

const { Title } = Typography;

const Table: React.FC = () => {
  const { deliveries } = useDeliveries();

  return (
    <>
      <Title>Мои доставки</Title>
      <AntdTable columns={columns} dataSource={deliveries} />
    </>
  );
};

export default Table;
