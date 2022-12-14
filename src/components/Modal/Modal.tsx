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
      title="???????????????? ????????????????"
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
              label="?????? ????????????????"
              name="title"
              placeholder="?????????????? ????????????????"
            />
            <Row gutter={[8, 0]}>
              <Col span={12}>
                <SelectField
                  label="???????????????? ????????????????"
                  placeholder="???????????????? ??????????????????"
                  name="deliveryMethod"
                  options={DeliveryMethod}
                  shouldUpdate={{ shouldUpdate: () => true }}
                />
              </Col>
              
              <Col span={12}>
                <SelectField
                  label="??????????"
                  placeholder="???????????????? ??????????"
                  name="rate"
                  options={TypeDelivery}
                  shouldUpdate={{ shouldUpdate: () => true }}
                />
              </Col>
            </Row>
            <StyledCollapse accordion>
              <StyledPanel header="???????????? ????????????????" key="1">
                <InputField
                  label="????????????"
                  name="fromCountry"
                  placeholder="?????????????? ????????????"
                />

                <InputField
                  label="??????????"
                  name="fromCity"
                  placeholder="?????????????? ??????????"
                />

                <InputField
                  label="??????????"
                  name="fromStreet"
                  placeholder="?????????????? ???????????????? ??????????"
                />

                <StyledRowWrap>
                  <Row style={{ marginBottom: 10 }}>?????????????? ??????</Row>

                  <Row>
                    <Checkbox name="fromIsHouse" onChange={setPrivateHouseFrom} />
                  </Row>
                </StyledRowWrap>

                <Row gutter={16}>
                  <Col span={privateHouse.fromPrivateHouse ? 12 : 8}>
                    <InputField
                      suffix={
                        <Tooltip title="?????????????? ?????????? ????????">
                          <InfoCircleOutlined />
                        </Tooltip>
                      }
                      label="??????"
                      name="fromHouse"
                    />
                  </Col>

                  {!privateHouse.fromPrivateHouse && (
                    <Col span={8}>
                      <InputField
                        suffix={
                          <Tooltip title="?????????????? ????????????????">
                            <InfoCircleOutlined />
                          </Tooltip>
                        }
                        label="????????????????"
                        name="fromHousing"
                      />
                    </Col>
                  )}

                  <Col span={privateHouse.fromPrivateHouse ? 12 : 8}>
                    <InputField
                      suffix={
                        <Tooltip title="?????????????? ???????????? ?????????????????? ???? 6 ????????">
                          <InfoCircleOutlined />
                        </Tooltip>
                      }
                      label="????????????"
                      name="fromIndex"
                    />
                  </Col>
                </Row>
              </StyledPanel>

              <StyledPanel header="????????" key="2">
                <InputField
                  label="????????????"
                  name="country"
                  placeholder="?????????????? ????????????"
                />

                <InputField
                  label="??????????"
                  name="city"
                  placeholder="?????????????? ??????????"
                />

                <InputField
                  label="??????????"
                  name="street"
                  placeholder="?????????????? ???????????????? ??????????"
                />

                <StyledRowWrap>
                  <Row style={{ marginBottom: 10 }}>?????????????? ??????</Row>

                  <Checkbox name="isHouse" onChange={setPrivateHouseTo} />
                </StyledRowWrap>

                <Row gutter={16}>
                  <Col span={privateHouse.toPrivateHouse ? 12 : 8}>
                    <InputField
                      suffix={
                        <Tooltip title="?????????????? ?????????? ????????">
                          <InfoCircleOutlined />
                        </Tooltip>
                      }
                      label="??????"
                      name="house"
                    />
                  </Col>

                  {!privateHouse.toPrivateHouse && (
                    <Col span={8}>
                      <InputField
                        suffix={
                          <Tooltip title="?????????????? ????????????????">
                            <InfoCircleOutlined />
                          </Tooltip>
                        }
                        label="????????????????"
                        name="housing"
                      />
                    </Col>
                  )}

                  <Col span={privateHouse.toPrivateHouse ? 12 : 8}>
                    <InputField
                      suffix={
                        <Tooltip title="?????????????? ???????????? ?????????????????? ???? 6 ????????">
                          <InfoCircleOutlined />
                        </Tooltip>
                      }
                      label="????????????"
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
                ????????????????
              </Button>

              <Button type="ghost" htmlType="reset">
                ????????????????
              </Button>

              <Button type="primary" htmlType="submit">
                <StyledText>??????????????</StyledText>
              </Button>
            </StyledRow>
          </Form>
        )}
      </Formik>
    </StyledModal>
  );
};

export default Modal;
