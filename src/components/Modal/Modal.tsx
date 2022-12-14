import { InfoCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  Row,
  Tooltip,
} from "antd";
import { Formik, Form } from "formik";
import { FC, useState } from "react";
import {
  DeliveryMethod,
  initialValuesModal,
  priceDelivery,
  TypeDelivery,
} from "../../constants";
import { CreateDeliverySchema } from "../../forms/validators";
import { useActions, useUser } from "../../hooks";
import { IDelivery } from "../../types";
import DisplayPrice from "../DisplayPrice/DisplayPrice";
import { SelectField } from "../SelectField/SelectField";
import { StyledRow } from "../StyledComponent";
import { InputField } from "../StyledComponent/inputField";
import { StyledCollapse, StyledModal, StyledPanel, StyledRowWrap, StyledText } from "./styled";

const { Panel } = Collapse;

interface IModal {
  children?: React.ReactNode;
  modalFooter?: React.ReactNode;
  isOpenModal: boolean;
  setIsOpenModal: (state: boolean) => void;
}

const Modal: FC<IModal> = ({ isOpenModal, setIsOpenModal }) => {
  const [privateHouse, setPrivateHouse] = useState({
    toPrivateHouse: false,
    fromPrivateHouse: false,
  });

  const { createDelivery } = useActions();
  const { user } = useUser();

  const setPrivateHouseFrom = () => {    
    setPrivateHouse({
      ...privateHouse,
      fromPrivateHouse: !privateHouse.fromPrivateHouse,
    });
  };

  const setPrivateHouseTo = () => {
    setPrivateHouse({
      ...privateHouse,
      toPrivateHouse: !privateHouse.toPrivateHouse,
    });
  };

  const createNewDelivery = (values: IDelivery) => {
    let price = priceDelivery;
    price *= DeliveryMethod[Number(values.deliveryMethod) - 1].deliveryTax;
    price *= TypeDelivery[Number(values.rate) - 1].factor;

    createDelivery({
      ...values,
      deliveryMethod:
        DeliveryMethod[Number(values.deliveryMethod) - 1].deliveryMethod,
      userId: user!.id!,
      price,
    });
    setIsOpenModal(false);
  };

  return (
    <StyledModal
      open={isOpenModal}
      centered
      onCancel={() => setIsOpenModal(false)}
      title="Создание доставки"
      footer={null}
    >
      <Formik
        initialValues={initialValuesModal}
        onSubmit={createNewDelivery}
        validationSchema={CreateDeliverySchema}
      >
        {({ values }) => (
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
              <StyledPanel header="Откуда доставка" key="1">
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

                  <Row>
                    <Checkbox name="fromIsHouse" onChange={setPrivateHouseFrom} />
                  </Row>
                </StyledRowWrap>

                <Row gutter={16}>
                  <Col span={privateHouse.fromPrivateHouse ? 12 : 8}>
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

                  {!privateHouse.fromPrivateHouse && (
                    <Col span={8}>
                      <InputField
                        suffix={
                          <Tooltip title="Введите квартиру">
                            <InfoCircleOutlined />
                          </Tooltip>
                        }
                        label="Квартира"
                        name="fromHousing"
                      />
                    </Col>
                  )}

                  <Col span={privateHouse.fromPrivateHouse ? 12 : 8}>
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
              </StyledPanel>

              <StyledPanel header="Куда" key="2">
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

                  <Checkbox name="isHouse" onChange={setPrivateHouseTo} />
                </StyledRowWrap>

                <Row gutter={16}>
                  <Col span={privateHouse.toPrivateHouse ? 12 : 8}>
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

                  {!privateHouse.toPrivateHouse && (
                    <Col span={8}>
                      <InputField
                        suffix={
                          <Tooltip title="Введите квартиру">
                            <InfoCircleOutlined />
                          </Tooltip>
                        }
                        label="Квартира"
                        name="housing"
                      />
                    </Col>
                  )}

                  <Col span={privateHouse.toPrivateHouse ? 12 : 8}>
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
              </StyledPanel>
            </StyledCollapse>

            <StyledRow>
              <DisplayPrice rate={values.rate} deliveryMethod={values.deliveryMethod} />
            </StyledRow>

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
                <StyledText>Создать</StyledText>
              </Button>
            </StyledRow>
          </Form>
        )}
      </Formik>
    </StyledModal>
  );
};

export default Modal;
