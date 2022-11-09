import { Form, Typography } from "antd";
import styled from "styled-components";
import palette from "../palette";
import { InputField } from "../StyledComponent/inputField";

const { Text } = Typography;

export const StyledForm = styled(Form)`
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

export const StyledInputField = styled(InputField)`
  margin-top: 15px;
`

export const StyledText = styled(Text)`
  color: ${palette.light};
  font-size: 25px;
  font-align: center;
`;