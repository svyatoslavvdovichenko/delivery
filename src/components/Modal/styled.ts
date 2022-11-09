import { Collapse, Modal as AntdModal, Row } from "antd";
import styled from "styled-components";

export const StyledModal = styled(AntdModal)`
  border-radius: 15px;
`;

export const StyledRowWrap = styled(Row)`
  display: flex;
  flex-direction: column;
`;

export const StyledCollapse = styled(Collapse)`
  margin-top: 15px;
`;
