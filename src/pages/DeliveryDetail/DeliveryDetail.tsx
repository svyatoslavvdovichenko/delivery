import { CheckOutlined } from "@ant-design/icons";
import { Card, Col, PageHeader, Row, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import palette from "../../components/palette";
import { IDelivery } from "../../types";

const { Title, Text } = Typography;

const StyledHeader = styled(PageHeader)`
  background-color: ${palette.darkBlue};
  margin-top: -5px;
  border-radius: 15px;
`;

const StyledCard = styled(Card)`
  width: 100%;
  margin-top: 15px;
  background-color: ${palette.dark};
`;

const StyledTitle = styled(Title)`
  text-align: center;
`;

const DeliveryDetail: FC = () => {
  const [delivery, setDelivery] = useState<IDelivery | null>(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const getCurrentDelivery = () => {
    const deliveries = JSON.parse(localStorage.getItem("deliveries")!);
    setDelivery(deliveries.filter((el: IDelivery) => el.id === Number(id))[0]);
  };

  useEffect(() => {
    getCurrentDelivery();
  }, []);

  return (
    <>
      <StyledHeader
        onBack={() => navigate("/list")}
        title={`Доставка № ${delivery?.id!}`}
      />
      <Row>
        <StyledCard
          hoverable
          title={<StyledTitle>{delivery?.title}</StyledTitle>}
          bordered={false}
        >
          <Row>
            <Col span={18}>
              <Title level={5}>Оператор доставки:</Title>
            </Col>

            <Col span={4}>
              <Text>{delivery?.deliveryMethod}</Text>
            </Col>
          </Row>

          <Row>
            <Col span={18}>
              <Title level={5}>Cтоимость доставки:</Title>
            </Col>

            <Col span={4}>
              <Text>{`${delivery?.price} рублей.`}</Text>
            </Col>
          </Row>
        </StyledCard>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <StyledCard
            title={<Title level={3}>Откуда доставка</Title>}
            hoverable
            bordered={false}
          >
            <Row>
              <Col span={12}>
                <Title level={5}>Страна:</Title>
              </Col>

              <Col span={12}>
                <Text>{delivery?.fromCountry}</Text>
              </Col>

              <Col span={12}>
                <Title level={5}>Город:</Title>
              </Col>

              <Col span={12}>
                <Text>{delivery?.fromCity}</Text>
              </Col>

              <Col span={12}>
                <Title level={5}>Дом:</Title>
              </Col>

              <Col span={12}>
                <Text>{delivery?.fromHouse}</Text>
              </Col>

              {delivery?.isHouse ? (
                <Title level={5}>
                  Частный дом <CheckOutlined />
                </Title>
              ) : (
                <>
                  <Col span={12}>
                    <Title level={5}>Квартира:</Title>
                  </Col>

                  <Col span={12}>
                    <Text>{delivery?.fromHousing}</Text>
                  </Col>
                </>
              )}
            </Row>
          </StyledCard>
        </Col>

        <Col span={12}>
          <StyledCard
            title={<Title level={3}>Куда доставка</Title>}
            hoverable
            bordered={false}
          >
            <Row>
              <Col span={12}>
                <Title level={5}>Страна:</Title>
              </Col>

              <Col span={12}>
                <Text>{delivery?.country}</Text>
              </Col>

              <Col span={12}>
                <Title level={5}>Город:</Title>
              </Col>

              <Col span={12}>
                <Text>{delivery?.city}</Text>
              </Col>

              <Col span={12}>
                <Title level={5}>Дом:</Title>
              </Col>

              <Col span={12}>
                <Text>{delivery?.house}</Text>
              </Col>

              {!delivery?.isHouse ? (
                <Title level={5}>
                  Частный дом <CheckOutlined />
                </Title>
              ) : (
                <>
                  <Col span={12}>
                    <Title level={5}>Квартира:</Title>
                  </Col>

                  <Col span={12}>
                    <Text>{delivery?.housing}</Text>
                  </Col>
                </>
              )}
            </Row>
          </StyledCard>
        </Col>
      </Row>
      <></>
    </>
  );
};

export default DeliveryDetail;
