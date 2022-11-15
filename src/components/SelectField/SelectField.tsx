import { Row, Select, SelectProps } from "antd";
import { Field, FieldProps } from "formik";
import { FC, ReactNode } from "react";
import { StyledContainer, StyledErrorMessage } from "../StyledComponent";

const { Option } = Select;

export interface SelectFieldProps extends SelectProps<any> {
  name: string;
  options: any[];
  label?: ReactNode;
  shouldUpdate?: { shouldUpdate: () => boolean };
}

export const SelectField: FC<SelectFieldProps> = ({
  name,
  options,
  label,
  shouldUpdate,
  ...selectProps
}) => {
  return (
    <StyledContainer>
      <Field name={name} {...shouldUpdate}>
        {({
          meta: { initialValue, value, error },
          form: { setFieldValue },
        }: FieldProps) => (
          <Row>
            {label && <Row style={{ marginBottom: 10 }}>{label}</Row>}
            <Select
              style={{width: "100%"}}
              defaultValue={initialValue || undefined}
              value={value || null}
              status={error ? "error" : ""}
              onChange={(val: number) => {
                setFieldValue(name, val);
              }}
              {...selectProps}
            >
              {options &&
                options.length > 0 &&
                options.map((option) => (
                  <Option key={option.id} value={option.id}>
                    {option.title}
                  </Option>
                ))}
            </Select>
          </Row>
        )}
      </Field>
      <StyledErrorMessage name={name} component="div" />
    </StyledContainer>
  );
};
