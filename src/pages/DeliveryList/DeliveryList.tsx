import { FC, useState } from "react";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";
import { Button } from "antd";

const DeliveryList: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  
  return (
    <>
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal}/>}
      <Table />
      <Button type="primary" onClick={() => setIsOpenModal(true)}>
        Добавить доставку
      </Button>
    </>
  );
};

export default DeliveryList;
