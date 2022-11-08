import { Typography } from "antd";
import { FC, useEffect } from "react";
import { DeliveryMethod, priceDelivery, TypeDelivery } from "../../constants";
import { IDelivery } from "../../types";

interface IDisplayPrice {
  values: IDelivery;
}

const DisplayPrice: FC<IDisplayPrice> = ({ values }) => {
  const getCurrentPrice = () => {
    let price = priceDelivery;

    if (values.deliveryMethod && !values.rate) {
      price *=
        DeliveryMethod[Number(values.deliveryMethod) - 1].deliveryTax || 1;
    }

    if (values.rate && !values.deliveryMethod) {
      price *= TypeDelivery[Number(values.rate) - 1].factor || 1;
    }

    if (values.deliveryMethod && values.rate) {
      price *=
        DeliveryMethod[Number(values.deliveryMethod) - 1].deliveryTax || 1;
      price *= TypeDelivery[Number(values.rate) - 1].factor || 1;
      return price;
    }

    return price
  };

  return (
    <Typography.Text>
      {`Текущая стоимость доставки: ${getCurrentPrice()} ₽`}{" "}
    </Typography.Text>
  );
};

export default DisplayPrice;
