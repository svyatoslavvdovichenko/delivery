import { Table as AntdTable, Typography } from "antd";
import { useDeliveries } from "../../hooks";
import { columns } from "../../constants";
import { StyledButton } from "./styled";

const { Title } = Typography;

interface ITable {
  setIsOpenModal: (boolean: boolean) => void;
}

const Table: React.FC<ITable> = ({ setIsOpenModal }) => {
  const { deliveries } = useDeliveries();

  const isVisiblePagination = deliveries.length < 10;

  return (
    <>
      <Title>Мои доставки</Title>

      <AntdTable
        footer={() => (
          <StyledButton onClick={() => setIsOpenModal(true)}>
            Добавить доставку
          </StyledButton>
        )}
        pagination={{ hideOnSinglePage: isVisiblePagination }}
        columns={columns}
        dataSource={deliveries}
      />
    </>
  );
};

export default Table;
