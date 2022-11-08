import { FC, useEffect } from "react";
import { useActions } from "../hooks";

interface ICheckAuth {
  children: React.ReactNode;
}

const CheckAuth: FC<ICheckAuth> = ({ children }) => {
  const { setUser } = useActions();

  const user = JSON.parse(localStorage.getItem("user")!);

  if (user) {
    setUser(user);
  }

  return <>{children}</>;
};

export default CheckAuth;
