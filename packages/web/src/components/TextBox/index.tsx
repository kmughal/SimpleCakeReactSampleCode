import { Controller } from "react-hook-form";
import { TextBoxProps } from "./types";
import { TextField } from "@material-ui/core";

export const TextBoxWithValidation: React.FC<{ textBoxProps: TextBoxProps }> =
  ({ textBoxProps }) => {
    const {
      name,
      label,
      requiredMessage,
      maximumLengthMessage,
      maximumLength,
      control,
      errors,
    } = textBoxProps;
    const rules: Record<any, any> = {};
    rules.required = { value: true, message: requiredMessage };

    if (maximumLength) {
      rules.maxLength = { value: maximumLength, message: maximumLengthMessage };
    }
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={""}
        render={({ field }) => {
          const error = Object.keys(errors).includes(name);
          const helperText = error ? errors[name]?.message : null;
          const fieldValueWithValidation = Object.assign(
            { ...field },
            { error, helperText }
          );
          return (
            <TextField
              label={label}
              fullWidth
              margin="dense"
              {...fieldValueWithValidation}
            />
          );
        }}
      />
    );
  };
