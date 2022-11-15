import { FC, useEffect } from "react";
import { useActions, useUser } from "../hooks";

interface IGetDeliveries {
  children: React.ReactNode;
}

const GetDeliveries: FC<IGetDeliveries> = ({ children }) => {
  const { user } = useUser();
  const { getDeliveries } = useActions();

  useEffect(() => {
    getDeliveries(user!.id!);
  }, []);

  return <>{children}</>;
};

export default GetDeliveries;
