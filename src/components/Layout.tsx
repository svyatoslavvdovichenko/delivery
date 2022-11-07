import { FC } from "react";
import {
  Button,
  Dropdown,
  Layout as AntdLayout,
  Menu,
  Row,
  Typography,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import palette from "./palette";
import { StyledButton } from "./StyledComponent";
import Alert from "./Alert/Alert";
import { useActions, useError, useUser } from "../hooks";

const { Title } = Typography;

const { Header, Footer, Content } = AntdLayout;

const { Item } = Menu;

const StyledContent = styled(Content)<{ $shouldBeCentered: boolean }>`
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

const StyledDropdown = styled(Dropdown)`
  border-radius: 15px;
`;

const StyledItem = styled(Item)`
  border-radius: 10px;
`;
const StyledMenu = styled(Menu)`
  border-radius: 10px;
`;

const StyledHeader = styled(Header)`
  background-color: ${palette.darkBlue};
`;

const StyledFooter = styled(Footer)`
  background-color: ${palette.darkBlue};
  color: ${palette.light};
`;

export type ILayout = {
  shouldBeCentered?: boolean;
  children: React.ReactNode;
};

const StyledLayout = styled(AntdLayout)`
  background-color: ${palette.mainTheme};
`;

const CenterRow = styled(Row)`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const Layout: FC<ILayout> = ({
  children,
  shouldBeCentered = false,
}) => {
  const { isOpenError } = useError();
  const { isAuth, user} = useUser();
  const { onLogOut } = useActions();

  return (
    <StyledLayout style={{ minHeight: "100vh" }}>
      <StyledHeader>
        <CenterRow justify="space-between" align="middle">
          <Link to="/">
            <Title style={{ color: palette.light }} level={3}>
              Delivery Very
            </Title>
          </Link>

          {isAuth && (
            <StyledDropdown
              overlay={
                <StyledMenu>
                  <StyledItem onClick={onLogOut} key="1">Выйти</StyledItem>
                </StyledMenu>
              }
            >
              <StyledButton icon={<UserOutlined />}>{user?.firstName}</StyledButton>
            </StyledDropdown>
          )}
        </CenterRow>
      </StyledHeader>

      <StyledContent $shouldBeCentered={shouldBeCentered}>
        {children}
      </StyledContent>
      
      {isOpenError && <Alert />}
      
      <StyledFooter>Delivery Very</StyledFooter>
    </StyledLayout>
  );
};
