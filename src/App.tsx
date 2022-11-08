import { FC } from "react";
import { useTypedSelector, useUser } from "./hooks";
import DeliveryMain from "./DeliveryMain";
import Authorization from "./Authorization";

const App: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.userReducer);

  if (isAuth) {
    return <DeliveryMain />;
  }

  return <Authorization />;
};

export default App;
