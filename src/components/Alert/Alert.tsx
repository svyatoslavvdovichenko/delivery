import { Alert as AntAlert } from "antd";
import styled from "styled-components";
import { useActions, useError } from "../../hooks";

const StyledAlert = styled(AntAlert)`
  border-radius: 15px;
  position: absolute;
  bottom: 80px;
  left: 20px;
  z-index: 1010;
  font-size: 18px;
`;

const Alert: React.FC = () => {
  const { message } = useError();
  const { closeError } = useActions()

  return <StyledAlert 
    closable 
    afterClose={closeError}
    showIcon  
    message={message}
    type="error" 
  />;
};
export default Alert;