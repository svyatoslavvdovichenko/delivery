import { Collapse, Modal as AntdModal, Row, Typography } from "antd";
import styled from "styled-components";
import palette from "../palette";

export const StyledModal = styled(AntdModal)`
  border-radius: 15px;
`;

const { Text } = Typography;

export const StyledText = styled(Text)`
  color: black;
`

export const StyledRowWrap = styled(Row)`
  display: flex;
  flex-direction: column;
`;

export const StyledCollapse = styled(Collapse)`
  margin-top: 15px;
`;
