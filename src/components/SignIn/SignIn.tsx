import { Row, Typography } from "antd";
import { Formik, Form } from "formik";
import { SingInSchema } from "../../forms/validators";
import styled from "styled-components";
import palette from "../palette";
import { InputField } from "../StyledComponent/inputField";
import { StyledButtonIn } from "../StyledComponent";
import { useActions } from "../../hooks";
import { IUser } from "../../types";
import { signInValidate } from "../../helpers/signInValidate";

const { Text } = Typography;

const StyledForm = styled(Form)`
  background-color: ${palette.darkBlue};
  padding: 25px;
  padding-bottom: 50px;
  border-radius: 10px;
  min-height: 30vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    width: 500px;
  }

  @media (max-width: 750px) {
    min-width: 90vw;
  }
`;

const StyledText = styled(Text)`
  color: ${palette.light};
  font-size: 25px;
  font-align: center;
`;

const SignIn = () => {
  const { onLogIn, setError } = useActions();

  const onUserLogin = (values: IUser) => {
    const error = signInValidate(values);

    if (error) {
      setError(error);
      return;
    }

    onLogIn(values);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={onUserLogin}
      validationSchema={SingInSchema}
    >
      {({ isValid }) => (
        <StyledForm>
          <StyledText>Авторизация</StyledText>

          <InputField name="email" placeholder="Email" />

          <InputField name="password" placeholder="Пароль" isPassword />

          <Row justify="space-between" align="middle"></Row>

          <StyledButtonIn block htmlType="submit">
            Вход
          </StyledButtonIn>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignIn;
