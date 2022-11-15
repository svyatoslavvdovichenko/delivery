import { Form, Typography } from "antd";
import styled from "styled-components";
import palette from "../palette";

const { Text } = Typography;

export const StyledForm = styled(Form)`
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

export const StyledText = styled(Text)`
  color: ${palette.light};
  font-size: 25px;
  font-align: center;
`;