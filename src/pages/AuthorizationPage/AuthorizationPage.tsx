import { Col, Row, Tabs, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Alert from "../../components/Alert/Alert";
import { Layout } from "../../components/Layout";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const StyledTabPane = styled(TabPane)`
  border: 1px solid black;
`;

export enum TabKeys {
  SignIn = "sign-in",
  SignUp = "sign-up",
}

export const AuthorizationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let searchParams = new URLSearchParams(location.search);
  const activeTabKey = searchParams.get("tab");

  return (
    <Layout shouldBeCentered={true}>
      <Row justify="center" align="middle" style={{ height: "100%" }}>
        <Col>
          <Title style={{ marginBottom: 12, textAlign: "center" }}>
            Delivery Very
          </Title>

          <Tabs
            centered
            onChange={(key) =>
              navigate({
                pathname: location.pathname,
                search: `?tab=${key}`,
              })
            }
            activeKey={activeTabKey ? String(activeTabKey) : TabKeys.SignIn}
          >
            <StyledTabPane key={TabKeys.SignIn} tab="Вход">
              <SignIn />
            </StyledTabPane>

            <StyledTabPane key={TabKeys.SignUp} tab="Регистрация">
              <SignUp />
            </StyledTabPane>
          </Tabs>
        </Col>
      </Row>
    </Layout>
  );
};
