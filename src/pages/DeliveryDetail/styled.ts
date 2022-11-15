import { PageHeader, Card, Typography } from "antd";
import styled from "styled-components";
import palette from "../../components/palette";

const { Title, Text } = Typography;

export const StyledHeader = styled(PageHeader)`
  background-color: ${palette.darkBlue};
  margin-top: -5px;
  border-radius: 15px;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  margin-top: 15px;
  cursor: default;
  background-color: ${palette.darkBlue};
`;

export const HeaderText = styled(Text)`
  cursor: pointer;
`;

export const StyledTitle = styled(Title)`
  text-align: center;
`;
