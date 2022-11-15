import { FC } from "react";
import { Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import palette from "../palette";
import { StyledButton } from "../StyledComponent";
import Alert from "../Alert/Alert";
import { useActions, useError, useUser } from "../../hooks";
import { CenterRow, StyledContent, StyledDropdown, StyledFooter, StyledHeader, StyledItem, StyledLayout, StyledMenu } from "./styled";

const { Title } = Typography;

export type TLayout = {
  shouldBeCentered?: boolean;
  children: React.ReactNode;
};

export const Layout: FC<TLayout> = ({ children, shouldBeCentered = false }) => {
  const { isOpenError } = useError();
  const { isAuth, user } = useUser();
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
                  <StyledItem onClick={onLogOut} key="1">
                    Выйти
                  </StyledItem>
                </StyledMenu>
              }
            >
              <StyledButton icon={<UserOutlined />}>
                {user?.firstName}
              </StyledButton>
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
