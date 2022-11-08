import { Typography } from "antd";
import { FC } from "react"
import { DeliveryMethod, priceDelivery, TypeDelivery } from "../../constants";
import { IDelivery } from "../../types"

interface IDisplayPrice {
  values: IDelivery
}

const DisplayPrice: FC<IDisplayPrice> = ({ values }) => {
  let price = priceDelivery;
  price *= DeliveryMethod[Number(values.deliveryMethod) - 1].deliveryTax;
  price *= TypeDelivery[Number(values.rate) - 1].factor;
  
  return (
    <Typography.Text>{`Текущая стоимость доставки: ${price} ₽`} </Typography.Text>
  )
}

export default DisplayPrice;

