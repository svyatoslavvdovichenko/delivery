import { Typography } from "antd";
import { FC } from "react";
import { getCurrentPrice } from "../../helpers/getCurrentPrice";

interface IDisplayPrice {
  rate: string;
  deliveryMethod: string;
}

const DisplayPrice: FC<IDisplayPrice> = ({ rate, deliveryMethod }) => (
  <Typography.Text>
    {`Текущая стоимость доставки: ${getCurrentPrice(rate, deliveryMethod)} ₽`}{" "}
  </Typography.Text>
);

export default DisplayPrice;
