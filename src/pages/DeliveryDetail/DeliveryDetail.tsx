import { CheckOutlined } from "@ant-design/icons";
import { Card, Col, PageHeader, Row, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IDelivery } from "../../types";
import { HeaderText, StyledCard, StyledHeader, StyledTitle } from "./styled";

const { Title, Text } = Typography;

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
        title={
          <HeaderText
            onClick={() => navigate("/list")}
          >
            {`Доставка № ${delivery?.id!}`}
          </HeaderText>
        }
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

              {delivery?.isHouse ? (
                <>
                  <Col span={12}>
                    <Title level={5}>Квартира:</Title>
                  </Col>

                  <Col span={12}>
                    <Text>{delivery?.housing}</Text>
                  </Col>
                </>
              ) : (
                <Title level={5}>
                  Частный дом <CheckOutlined />
                </Title>
              )}
            </Row>
          </StyledCard>
        </Col>
      </Row>
    </>
  );
};

export default DeliveryDetail;
