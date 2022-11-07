import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Row } from "antd";
import { Field, FieldProps } from "formik";
import { FC, ReactNode } from "react";
import {
  StyledErrorMassege,
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
  suffix
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
              style={{marginBottom: "20px"}}
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
              style={{marginBottom: "20px"}}
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
    <StyledErrorMassege name={name} component="div" />
  </StyledContainer>
);
