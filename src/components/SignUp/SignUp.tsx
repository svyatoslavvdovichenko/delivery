import { Row, Typography, Col } from "antd";
import { Formik, Form } from "formik";
import { SingUpSchema } from "../../forms/validators";
import styled, { css } from "styled-components";
import palette from "../palette";
import { InputField } from "../StyledComponent/inputField";
import { StyledButtonOut } from "../StyledComponent";
import { useActions } from "../../hooks";
import { signUpValidate } from "../../helpers/signUpValidate";

const { Text } = Typography;

const StyledForm = styled(Form)`
  background-color: ${palette.sand};
  padding: 25px;
  padding-bottom: 50px;
  border-radius: 10px;
  min-height: 30vh;
  min-width: 50vw;

  @media (max-width: 750px) {
    min-width: 90vw;
  }
`;

const StyledText = styled(Text)`
  color: ${palette.light};
  font-size: 25px;
  font-align: center;
`;

const SignUp = () => {
  const { setError, onSignUp } = useActions()

  const registration = (value: any) => {
    const { password, email, firstName, lastName } = value; 
    const error = signUpValidate({ password, email, firstName, lastName });    
    
    if (error) {
      setError(error);
      return;
    }

    onSignUp({ password, email, firstName, lastName });
  }

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
              <InputField name="firstName" type="right" placeholder="Иван" />
            </Col>

            <Col span={12}>
              <InputField name="lastName" type="left" placeholder="Иванов" />
            </Col>
          </Row>

          <InputField name="email" placeholder="Email" />

          <InputField name="password" placeholder="Пароль" isPassword />

          <InputField name="doublePassword" placeholder="Повторите пароль" isPassword />

          <Row justify="space-between" align="middle"></Row>

          <StyledButtonOut block htmlType="submit" disabled={!isValid}>
            Зарегистрироваться
          </StyledButtonOut>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignUp;
