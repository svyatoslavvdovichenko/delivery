import { Row, Col } from "antd";
import { Formik, Form } from "formik";
import { SingUpSchema } from "../../forms/validators";
import { StyledButtonOut } from "../StyledComponent";
import { useActions } from "../../hooks";
import { signUpValidate } from "../../helpers/signUpValidate";
import { StyledForm, StyledInputField, StyledText } from "./styled";


const SignUp = () => {
  const { setError, onSignUp } = useActions();

  const registration = (value: any) => {
    const { password, email, firstName, lastName } = value;
    const error = signUpValidate({ password, email, firstName, lastName });

    if (error) {
      setError(error);
      return;
    }

    onSignUp({ password, email, firstName, lastName });
  };

  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        doublePassword: "",
      }}
      onSubmit={registration}
      validationSchema={SingUpSchema}
    >
      {({ isValid }) => (
        <StyledForm>
          <StyledText>Регистрация</StyledText>
          <Row>
            <Col span={12}>
              <StyledInputField name="firstName" type="right" placeholder="Иван" />
            </Col>

            <Col span={12}>
              <StyledInputField name="lastName" type="left" placeholder="Иванов" />
            </Col>
          </Row>

          <StyledInputField name="email" placeholder="Email" />

          <StyledInputField name="password" placeholder="Пароль" isPassword />

          <StyledInputField
            name="doublePassword"
            placeholder="Повторите пароль"
            isPassword
          />

          <Row justify="space-between" align="middle"></Row>

          <StyledButtonOut block htmlType="submit">
            Зарегистрироваться
          </StyledButtonOut>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignUp;
