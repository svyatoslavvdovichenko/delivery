import {
  DeliveryMethodEmum,
  deliveryMethodTax,
  IDelivery,
  rateEnum,
} from "./types";
import { Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Link, NavLink } from "react-router-dom";

const DeliveryMethod: deliveryMethodTax[] = [
  {
    id: 1,
    title: "DHL",
    link: "https://www.logistics.dhl.ru/ru-ru/home.html",
    deliveryMethod: DeliveryMethodEmum.DHL,
    deliveryTax: 2,
  },
  {
    id: 2,
    title: "Почта России",
    link: "https://www.pochta.ru/",
    deliveryMethod: DeliveryMethodEmum.POST_OF_RUSSIA,
    deliveryTax: 1,
  },
  {
    id: 3,
    title: "СДЭК",
    link: "https://www.cdek.ru/ru",
    deliveryMethod: DeliveryMethodEmum.SDEK,
    deliveryTax: 1.5,
  },
];

const { Text } = Typography;

const columns: ColumnsType<IDelivery> | undefined = [
  {
    title: "Название",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Оператор",
    dataIndex: "deliveryMethod",
    key: "deliveryMethod",
    filters: [
      {
        text: "Почта россии",
        value: "Почта россии",
      },
      {
        text: "DHL",
        value: "DHL",
      },
      {
        text: "СДЭК",
        value: "СДЭК",
      },
    ],
    //Пример из документации работает с string, но как я не пробывал работает только с any
    onFilter: (value: any, item) => item.deliveryMethod.includes(value),
  },
  {
    title: "Цена",
    dataIndex: "price",
    sorter: (a, b) => Number(a.price) - Number(b.price),
    key: "price",
    render: (price) => <Text>{`${price} ₽`}</Text>,
  },
  {
    width: 200,
    title: "Подробнее о доставке",
    render: (id: number) => <NavLink to={`/detail/${id}`}>Подробнее</NavLink>,
    dataIndex: "id",
    key: "more",
  },
];

const TypeDelivery = [
  {
    id: 1,
    title: rateEnum.DEFAULT,
    factor: 1,
  },
  {
    id: 2,
    title: rateEnum.PREMIUM,
    factor: 1.5,
  },
];

const initialValuesModal: IDelivery = {
  title: "",
  deliveryMethod: "",
  country: "",
  city: "",
  street: "",
  house: "",
  isHouse: false,
  housing: "",
  index: "",
  fromCountry: "",
  fromCity: "",
  fromStreet: "",
  fromHouse: "",
  fromIsHouse: false,
  fromHousing: "",
  fromIndex: "",
  rate: "",
};

const priceDelivery = 500;

export {
  DeliveryMethod,
  priceDelivery,
  TypeDelivery,
  columns,
  initialValuesModal,
};
