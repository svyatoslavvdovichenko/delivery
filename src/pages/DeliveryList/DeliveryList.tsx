import { FC, useState } from "react";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";
import { Button } from "antd";
import styled from "styled-components";

const DeliveryList: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} />
      )}
      <Table setIsOpenModal={setIsOpenModal}/>
    </>
  );
};

export default DeliveryList;
