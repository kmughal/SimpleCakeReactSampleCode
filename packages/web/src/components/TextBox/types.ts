import { Control, DeepMap, FieldError } from "react-hook-form";

export interface TextBoxProps {
  control: Control<any>;
  errors: DeepMap<any, FieldError>;
  name: string;
  requiredMessage: string;
  maximumLengthMessage?: string;
  maximumLength?: number;
  label: string;
}
