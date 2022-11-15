import { useEffect } from "react";
import { useActions, useError } from "../../hooks";
import { StyledAlert } from "./styled";

const Alert: React.FC = () => {
  const { message } = useError();
  const { closeError } = useActions();

  useEffect(() => {
    setTimeout(() => {
      closeError();
    }, 3000);
  }, []);

  return (
    <StyledAlert
      closable
      afterClose={closeError}
      showIcon
      message={message}
      type="error"
    />
  );
};
export default Alert;
