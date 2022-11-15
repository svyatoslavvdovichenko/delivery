import { Button } from 'antd';
import styled from 'styled-components';
import palette from '../palette';

export const StyledButton = styled(Button)`
  border-radius: 20px;
  margin: 0px;

  &:hover {
    background-color: ${palette.darkBlue};
    color: ${palette.light};
    border-color: ${palette.light};
  }

  $:active {
    background-color: ${palette.light};
    border-color: ${palette.darkBlue};
  }
`