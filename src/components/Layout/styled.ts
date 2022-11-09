import {
  Dropdown,
  Layout as AntdLayout,
  Menu,
  Row,
} from "antd";
import styled, { css } from "styled-components";
import palette from "../palette";

const { Header, Footer, Content } = AntdLayout;

const { Item } = Menu;

export const StyledContent = styled(Content)<{ $shouldBeCentered: boolean }>`
  padding: 20px;

  ${(props) =>
    props.$shouldBeCentered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: "#FAFAFA";
    `}
`;

export const StyledDropdown = styled(Dropdown)`
  border-radius: 15px;
`;

export const StyledItem = styled(Item)`
  border-radius: 10px;
`;
export const StyledMenu = styled(Menu)`
  border-radius: 10px;
`;

export const StyledHeader = styled(Header)`
  background-color: ${palette.darkBlue};
`;

export const StyledFooter = styled(Footer)`
  background-color: ${palette.darkBlue};
  color: ${palette.light};
`;

export const StyledLayout = styled(AntdLayout)`
  background-color: ${palette.dark};
`;

export const CenterRow = styled(Row)`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;