import * as Yup from "yup";

const REQUIRED_FIELD = Yup.string().required("Это обязательное поле");

export const SingInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Это обязательное поле")
    .email("Введите валидный email"),
  password: Yup.string()
    .required("Это обязательное поле")
    .min(6, "Слишком короткий пароль")
    .matches(/(?=.*[0-9])/, "Пароль должен содержать цифры")
    .matches(/(?=.*[A-Z])/, "Пароль должен содержать заглавные буквы"),
});

export const SingUpSchema = Yup.object().shape({
  firstName: REQUIRED_FIELD,
  lastName: REQUIRED_FIELD,
  email: Yup.string().required("Это обязательное поле").email(),
  password: Yup.string()
    .required("Это обязательное поле")
    .min(6, "Слишком короткий пароль")
    .matches(/(?=.*[0-9])/, "Пароль должен содержать цифры"),
  doublePassword: Yup.string()
    .required("Это обязательное поле")
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать"),
});

export const CreateDeliverySchema = Yup.object().shape({
  title: REQUIRED_FIELD,
  deliveryMethod: REQUIRED_FIELD,
  country: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Название страны не может быть меньше 4х символов"),
  city: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Название города не может быть меньше 4х символов"),
  street: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Название улицы не может быть меньше 4х символов"),
  house: Yup.string()
    .required("Это обязательное поле")
    .min(1, "Номер дома не может быть меньше 1")
    .max(12, "Номер дома не может быть больше 12 символов")
    .matches(/^[1-9]\d*(?:[ /]?(?:[a-zA-Zа-яА-Я]+|[1-9]\d*))?$/, "Номер дома должен начинаться с цифры"),
  index: Yup.string()
    .required("Это обязательное поле")
    .matches(/^[0-9]+$/, "Введите корректный индекс")
    .min(6, "Индекс должен быть равным 6")
    .max(6, "Индекс должен быть равным 6"),
  fromCountry: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Название страны не может быть меньше 4х символов"),
  fromCity: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Название города не может быть меньше 4х символов"),
  fromStreet: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Название улицы не может быть меньше 4х символов"),
  fromHouse: Yup.string()
    .required("Это обязательное поле")
    .min(1, "Номер дома не может быть меньше 1")
    .max(12, "Номер дома не может быть больше 12 символов")
    .matches(/^[1-9]\d*(?:[ /]?(?:[a-zA-Zа-яА-Я]+|[1-9]\d*))?$/, "Номер дома должен начинаться с цифры"),
  fromIndex: Yup.string()
    .required("Это обязательное поле")
    .matches(/^[0-9]+$/, "Введите корректный индекс")
    .min(6, "Индекс должен быть равным 6")
    .max(6, "Индекс должен быть равным 6"),
  rate: REQUIRED_FIELD,
});
