import { Divider, Table as AntdTable, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useDeliveries } from "../../hooks";
import { IDelivery } from "../../types";

const { Title } = Typography;

const Table: React.FC = () => {
  const { deliveries } = useDeliveries();
  
  return (
    <>
      <Title>Мои доставки</Title>
      <AntdTable dataSource={deliveries}>
        <AntdTable.Column title="Название" dataIndex="title" key="title" />
        <AntdTable.Column
          title="Оператор"
          dataIndex="deliveryMethod"
          key="deliveryMethod"
          filters={[
            {
              text: "Почта россии",
              value: "Почта россии"
            },
            {
              text: "DHL",
              value: "DHL"
            },
            {
              text: "СДЭК",
              value: "СДЭК"
            },

          ]}
          onFilter={(value: string, item: IDelivery) => item.deliveryMethod.includes(value)}
        />
        <AntdTable.Column
          title="Цена"
          sorter={(a: IDelivery, b: IDelivery) => a.price! - b.price!}
          dataIndex="price"
          key="price"
        />
        <AntdTable.Column
          width={200}
          title="Подробнее о доставке"
          render={(id) => <Link to={`/detail/${id}`}>Подробнее</Link>}
          dataIndex="id"
          key="more"
        />
      </AntdTable>
    </>
  );
};

export default Table;
