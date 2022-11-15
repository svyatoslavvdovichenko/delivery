import { Collapse, Modal as AntdModal, Row, Typography } from "antd";
import styled from "styled-components";
import palette from "../palette";

const { Panel } = Collapse;

export const StyledModal = styled(AntdModal)`
  border-radius: 15px;
`;

const { Text } = Typography;

export const StyledText = styled(Text)`
  color: black;
`;

export const StyledPanel = styled(Panel)`
  .ant-modal {
    background: ${palette.darkBlue};
  }

  .ant-collapse-content {
    background: ${palette.darkBlue};
  }
`;

export const StyledRowWrap = styled(Row)`
  display: flex;
  flex-direction: column;
`;

export const StyledCollapse = styled(Collapse)`
  margin-top: 15px;
`;
