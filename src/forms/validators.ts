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
    .matches(/(?=.*[A-Z])/, "Пароль должен содержать заглавные буквы")
    .matches(/^[A-Za-z0-9]+$/, "Password must not contain special characters"),
});

export const SingUpSchema = Yup.object().shape({
  firstName: REQUIRED_FIELD,
  lastName: REQUIRED_FIELD,
  email: Yup.string().required("Это обязательное поле").email(),
  password: Yup.string()
    .required("Это обязательное поле")
    .min(6, "Слишком короткий пароль")
    .matches(/(?=.*[0-9])/, "Пароль должен содержать цифры")
    .matches(/(?=.*[A-Z])/, "Пароль должен содержать заглавные буквы")
    .matches(/^[A-Za-z0-9]+$/, "Password must not contain special characters"),
  doublePassword: Yup.string()
    .required("Это обязательное поле")
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать"),
});

export const CreateDeliverySchema = Yup.object().shape({
  title: REQUIRED_FIELD,
  deliveryMethod: REQUIRED_FIELD,
  country: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Введите название страны"),
  city: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Введите название страны"),
  street: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Введите название страны"),
  house: Yup.number()
    .required("Это обязательное поле")
    .min(1, "Номер дома не может быть меньше 1"),
  housing: Yup.string()
    .max(1, "Введите букву дома"),
  index: Yup.string()
    .required("Это обязательное поле")
    .matches(/^[0-9]+$/, "Введите корректный индекс")
    .min(6, "Введите корректный индекс")
    .max(6, "Введите корректный индекс"),
  fromCountry: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Введите название страны"),
  fromCity: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Введите название страны"),
  fromStreet: Yup.string()
    .required("Это обязательное поле")
    .min(4, "Введите название страны"),
  fromHouse: Yup.number()
    .required("Это обязательное поле")
    .min(1, "Номер дома не может быть меньше 1"),
  fromHousing: Yup.string()
    .max(1, "Введите букву дома"),
  fromIndex: Yup.string()
    .required("Это обязательное поле")
    .matches(/^[0-9]+$/, "Введите корректный индекс")
    .min(6, "Введите корректный индекс")
    .max(6, "Введите корректный индекс"),
  rate: REQUIRED_FIELD,
});
