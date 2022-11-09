import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Row } from "antd";
import { Field, FieldProps } from "formik";
import { FC, ReactNode } from "react";
import {
  StyledErrorMessage,
  StyledInput,
  StyledInputPassword,
  StyledContainer,
} from ".";

interface IInputProps {
  name: string;
  placeholder?: string;
  isPassword?: boolean;
  label?: ReactNode;
  type?: string;
  suffix?: ReactNode;
}

export const InputField: FC<IInputProps> = ({
  name,
  placeholder,
  isPassword,
  label,
  type,
  suffix,
}) => (
  <StyledContainer>
    <Field name={name}>
      {({ field, meta: { error, touched } }: FieldProps) => (
        <>
          {label && <Row style={{ marginBottom: 10 }}>{label}</Row>}

          {isPassword ? (
            <StyledInputPassword
              placeholder={placeholder}
              $validationError={error}
              $isTouched={touched}
              status={error ? "error" : ""}
              {...field}
              iconRender={(visible) =>
                visible ? (
                  <EyeTwoTone twoToneColor="white" />
                ) : (
                  <EyeInvisibleOutlined twoToneColor="white" />
                )
              }
            />
          ) : (
            <StyledInput
              placeholder={placeholder}
              border={type}
              $validationError={error}
              status={error ? "error" : ""}
              $isTouched={touched}
              suffix={suffix}
              {...field}
            />
          )}
        </>
      )}
    </Field>
    <StyledErrorMessage name={name} component="div" />
  </StyledContainer>
);
