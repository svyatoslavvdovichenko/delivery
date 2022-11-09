import { DeliveryMethod, priceDelivery, TypeDelivery } from "../constants";

export const getCurrentPrice = (rate: string, deliveryMethod: string) => {
  let price = priceDelivery;
  const deliveryMethodToNumber = Number(deliveryMethod) - 1;
  const rateToNumber = Number(rate) - 1;

  if (deliveryMethod && !rate) {
    price *= DeliveryMethod[deliveryMethodToNumber].deliveryTax || 1;
  }

  if (rate && !deliveryMethod) {
    price *= TypeDelivery[rateToNumber].factor || 1;
  }

  if (deliveryMethod && rate) {
    price *= DeliveryMethod[deliveryMethodToNumber].deliveryTax || 1;
    price *= TypeDelivery[rateToNumber].factor || 1;
    return price;
  }

  return price;
};