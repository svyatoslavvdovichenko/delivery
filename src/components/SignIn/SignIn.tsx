import { Row, Typography } from "antd";
import { Formik, Form } from "formik";
import { SingInSchema } from "../../forms/validators";
import styled from "styled-components";
import palette from "../palette";
import { InputField } from "../StyledComponent/inputField";
import { StyledButtonIn } from "../StyledComponent";

const { Text } = Typography;

const StyledForm = styled(Form)`
  background-color: ${palette.darkBlue};
  padding: 25px;
  padding-bottom: 50px;
  border-radius: 10px;
  min-height: 30vh;
  min-width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

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
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={SingInSchema}
    >
      {({ isValid }) => (
        <StyledForm>
          <StyledText>Авторизация</StyledText>

          <InputField name="username" placeholder="Email" />

          <InputField
            name="password"
            placeholder="Пароль"
            isPassword
          />

          <Row justify="space-between" align="middle"></Row>

          <StyledButtonIn block htmlType="submit" disabled={!isValid}>
            Вход
          </StyledButtonIn>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignIn;