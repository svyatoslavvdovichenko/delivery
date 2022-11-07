import { InfoCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  Modal as AntdModal,
  Row,
  Tooltip,
  Typography,
} from "antd";
import { Formik, FormikHelpers, FormikValues, Form } from "formik";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { DeliveryMethod, TypeDelivery } from "../../constants";
import { CreateDeliverySchema } from "../../forms/validators";
import { useActions, useUser } from "../../hooks";
import { SelectField } from "../SelectField/SelectField";
import { StyledRow } from "../StyledComponent";
import { InputField } from "../StyledComponent/inputField";

interface IModal {
  children?: React.ReactNode;
  modalFooter?: React.ReactNode;
  isOpenModal: boolean;
  setIsOpenModal: (state: boolean) => void;
}

const { Panel } = Collapse;

const StyledModal = styled(AntdModal)`
  border-radius: 15px;
`;

const StyledRowWrap = styled(Row)`
  display: flex;
  flex-direction: column;
`

const StyledCollapse = styled(Collapse)`
  margin-top: 15px;
`;

const Modal: FC<IModal> = ({ isOpenModal, setIsOpenModal }) => {
  const [privateHouse, setPrivateHouse] = useState({
    toPrivateHouse: false,
    fromPrivateHouse: false,
  });

  const { createDelivery } = useActions();
  const { user } = useUser();

  const setPrivateHouseFrom = () => {
    setPrivateHouse({ ...privateHouse, fromPrivateHouse: !privateHouse.fromPrivateHouse  });
  };

  const setPrivateHouseTo = () => {
    setPrivateHouse({ ...privateHouse, toPrivateHouse: !privateHouse.toPrivateHouse  });
  };

  const createNewDelivery = (values: any) => {
    let price: number = Math.floor(Math.random() * (5000 - 500) + 500);
    price *= DeliveryMethod[values.deliveryMethod - 1].deliveryTax;
    price *= TypeDelivery[values.rate - 1].factor;

    createDelivery({
      ...values,
      deliveryMethod: DeliveryMethod[values.deliveryMethod - 1].deliveryMethod,
      userId: user!.id!,
      price,
    });
    setIsOpenModal(false);
  };

  return (
    <>
      <StyledModal
        open={isOpenModal}
        centered
        onCancel={() => setIsOpenModal(false)}
        title="Создание доставки"
        footer={null}
      >
        <Formik
          initialValues={{
            title: "",
            deliveryMethod: "",
            country: "",
            city: "",
            street: "",
            house: 0,
            housing: "",
            index: 0,
            fromCountry: "",
            fromCity: "",
            fromStreet: "",
            fromHouse: 0,
            fromHousing: "",
            fromIndex: 0,
            rate: TypeDelivery[0],
          }}
          onSubmit={createNewDelivery}
          validationSchema={CreateDeliverySchema}
        >
          {({ isValid }) => (
            <Form>
              <InputField
                label="Имя доставки"
                name="title"
                placeholder="Введите название"
              />
              <Row gutter={[8, 0]}>
                <Col span={12}>
                  <SelectField
                    label="Оператор доставки"
                    placeholder="Выберите оператора"
                    name="deliveryMethod"
                    options={DeliveryMethod}
                    shouldUpdate={{ shouldUpdate: () => true }}
                  />
                </Col>
                <Col span={12}>
                  <SelectField
                    label="Тариф"
                    placeholder="Выберите тариф"
                    name="rate"
                    options={TypeDelivery}
                    shouldUpdate={{ shouldUpdate: () => true }}
                  />
                </Col>
              </Row>
              <StyledCollapse accordion>
                <Panel header="Откуда доставка" key="1">
                  <InputField
                    label="Страна"
                    name="country"
                    placeholder="Введите страну"
                  />

                  <InputField
                    label="Город"
                    name="city"
                    placeholder="Введите город"
                  />

                  <InputField
                    label="Улица"
                    name="street"
                    placeholder="Введите название улицы"
                  />

                  <StyledRowWrap>
                    <Row style={{ marginBottom: 10 }}>Частный дом</Row>

                    <Row>
                      <Checkbox
                        onChange={setPrivateHouseTo}
                      />
                    </Row>
                    
                  </StyledRowWrap>
    
                  <Row gutter={16}>
                    <Col span={privateHouse.toPrivateHouse? 8 : 12}>
                      <InputField
                        suffix={
                          <Tooltip title="Введите номер дома">
                            <InfoCircleOutlined />
                          </Tooltip>
                        }
                        label="Дом"
                        name="house"
                      />
                    </Col>

                    {privateHouse.toPrivateHouse && 
                      <Col span={8}>
                        <InputField
                          suffix={
                            <Tooltip title="Введите строение">
                              <InfoCircleOutlined />
                            </Tooltip>
                          }
                          label="Корпус"
                          name="housing"
                        />
                      </Col>
                    }

                    <Col span={privateHouse.toPrivateHouse? 8 : 12}>
                      <InputField
                        suffix={
                          <Tooltip title="Введите индекс состоящий из 6 цифр">
                            <InfoCircleOutlined />
                          </Tooltip>
                        }
                        label="Индекс"
                        name="index"
                      />
                    </Col>
                  </Row>
                </Panel>

                <Panel header="Куда" key="2">
                  <InputField
                    label="Страна"
                    name="fromCountry"
                    placeholder="Введите страну"
                  />

                  <InputField
                    label="Город"
                    name="fromCity"
                    placeholder="Введите город"
                  />

                  <InputField
                    label="Улица"
                    name="fromStreet"
                    placeholder="Введите название улицы"
                  />

                  <StyledRowWrap>
                    <Row style={{ marginBottom: 10 }}>Частный дом</Row>

                    <Checkbox
                      onChange={setPrivateHouseFrom}
                    />
                  </StyledRowWrap>

                  <Row gutter={16}>
                    <Col span={!privateHouse.fromPrivateHouse? 8 : 12}>
                      <InputField
                        suffix={
                          <Tooltip title="Введите номер дома">
                            <InfoCircleOutlined />
                          </Tooltip>
                        }
                        label="Дом"
                        name="fromHouse"
                      />
                    </Col>

                    {!privateHouse.fromPrivateHouse && 
                      <Col span={8}>
                        <InputField
                        suffix={
                          <Tooltip title="Введите строение">
                            <InfoCircleOutlined />
                          </Tooltip>
                        }
                        label="Корпус"
                        name="fromHousing"
                      />
                      </Col>
                    }

                    <Col span={!privateHouse.fromPrivateHouse? 8 : 12}>
                      <InputField
                        suffix={
                          <Tooltip title="Введите индекс состоящий из 6 цифр">
                            <InfoCircleOutlined />
                          </Tooltip>
                        }
                        label="Индекс"
                        name="fromIndex"
                      />
                    </Col>
                  </Row>
                </Panel>
              </StyledCollapse>

              <StyledRow justify="space-between">
                <Button
                  type="ghost"
                  htmlType="button"
                  onClick={() => setIsOpenModal(false)}
                >
                  Отменить
                </Button>

                <Button type="ghost" htmlType="reset">
                  Очистить
                </Button>

                <Button type="primary" htmlType="submit">
                  Создать
                </Button>
              </StyledRow>
            </Form>
          )}
        </Formik>
      </StyledModal>
    </>
  );
};

export default Modal;
