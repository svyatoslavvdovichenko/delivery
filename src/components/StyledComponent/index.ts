import { Button, Input, Row } from "antd";
import { ErrorMessage } from "formik";
import palette from "../palette";
import styled, { css } from "styled-components";

interface IInputProps {
  $validationError?: string;
  $isTouched?: boolean;
  border?: string;
}

export const StyledButton = styled(Button)`
  border: 0;

  &:hover {
    background-color: ${palette.darkBlue};
    color: ${palette.light};
    border-color: ${palette.light};
  }

  $:active {
    background-color: ${palette.light};
    border-color: ${palette.darkBlue};
  }
`;

export const StyledErrorMassege = styled(ErrorMessage)`
  position: absolute;
  color: ${palette.error};
`;

export const StyledRow = styled(Row)`
  margin-top: 15px;
`

export const StyledInput = styled(Input)<IInputProps>`
  border-radius: 20px;
  border-top-right-radius: ${({ border }) =>
    border === "right" ? "0px" : "20px"};
  border-bottom-right-radius: ${({ border }) =>
    border === "right" ? "0px" : "20px"};
  border-top-left-radius: ${({ border }) =>
    border === "left" ? "0px" : "20px"};
  border-bottom-left-radius: ${({ border }) =>
    border === "left" ? "0px" : "20px"};
  padding: 4px 11px;
  ${({ $validationError, $isTouched }) =>
    $validationError &&
    $isTouched &&
    css`
      border-color: ${palette.error};
      box-shadow: none;
    `};
`;

export const StyledInputPassword = styled(Input.Password)<IInputProps>`
  border-radius: 20px;
  padding: 4px 11px;
  ${({ $validationError, $isTouched }) =>
    $validationError &&
    $isTouched &&
    css`
      border-color: ${palette.error};
      box-shadow: none;
    `};
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

export const StyledButtonIn = styled(Button)`
  border-radius: 20px;
  margin-top: 20px;

  &:hover {
    background-color: ${palette.darkBlue};
    color: ${palette.light};
    border-color: ${palette.light};
  }

  $:active {
    background-color: ${palette.light};
    border-color: ${palette.darkBlue};
  }
`;

export const StyledButtonOut = styled(Button)`
  border-radius: 20px;
  margin-top: 25px;

  &:hover {
    background-color: ${palette.alpha};
    color: ${palette.light};
    border-color: ${palette.light};
  }

  $:active {
    background-color: ${palette.light};
    border-color: ${palette.darkBlue};
  }
`;
