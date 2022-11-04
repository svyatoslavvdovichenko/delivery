import * as Yup from 'yup'

const REQUIRED_FIELD = Yup.string().required('Это обязательное поле')

export const SingInSchema = Yup.object().shape({
  email: Yup.string()
    .required('Это обязательное поле')
    .email('Введите валидный email'),
  password: Yup.string()
    .required('Это обязательное поле')
    .min(6, 'Слишком короткий пароль')
    .matches(/(?=.*[0-9])/, 'Пароль должен содержать цифры')
    .matches(/(?=.*[A-Z])/, 'Пароль должен содержать заглавные буквы')
    .matches(/^[A-Za-z0-9]+$/, 'Password must not contain special characters'),
})

export const SingUpSchema = Yup.object().shape({
  firstName: REQUIRED_FIELD,
  lastName: REQUIRED_FIELD,
  email: Yup.string().required('Это обязательное поле').email(),
  password: Yup.string()
    .required('Это обязательное поле')
    .min(6, 'Слишком короткий пароль')
    .matches(/(?=.*[0-9])/, 'Пароль должен содержать цифры')
    .matches(/(?=.*[A-Z])/, 'Пароль должен содержать заглавные буквы')
    .matches(/^[A-Za-z0-9]+$/, 'Password must not contain special characters'),
  doublePassword: Yup.string()
    .required('Это обязательное поле')
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
})