import { Button, Input } from "antd";
import { ErrorMessage } from "formik";
import palette from "../palette";
import styled, { css } from "styled-components";

interface IInputProps {
  $validationError?: string;
  $isTouched?: boolean;
  border?: string;
}

export const StyledButton = styled(Button)`
  background-color: ${palette.light};
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
  margin-top: -20px;
  position: absolute;
  color: red;
`;

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
      border-color: red;
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
      border-color: red;
      box-shadow: none;
    `};
`;

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledButtonIn = styled(Button)`
  border-radius: 20px;

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
