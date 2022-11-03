import { DeliveryMethodEmum, deliveryMethodTax, rateEmum } from "./types"

const DeliveryMethod: deliveryMethodTax[] = [
  {
    id: 1,
    title: "DHL",
    link: "https://www.logistics.dhl.ru/ru-ru/home.html",
    deliveryMethod: DeliveryMethodEmum.DHL,
    deliveryTax: 2
  },
  {
    id: 2,
    title: "Почта России",
    link: "https://www.pochta.ru/",
    deliveryMethod: DeliveryMethodEmum.POST_OF_RUSSIA,
    deliveryTax: 1
  },
  {
    id: 1,
    title: "СДЭК",
    link: "https://www.cdek.ru/ru",
    deliveryMethod: DeliveryMethodEmum.SDEK,
    deliveryTax: 1.5
  },
]

const TypeDelivery = [
  {
    id: 1,
    rateType: rateEmum.DEFAULT,
    factor: 1,
  },
  {
    id: 2,
    rateType: rateEmum.PREMIUM,
    factor: 1.5,
  }
]

export {
  DeliveryMethod,
  TypeDelivery
}