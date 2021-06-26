import { Control, DeepMap, FieldError, UseFormRegister } from "react-hook-form";

export interface RatingProps {
  errors: DeepMap<any, FieldError>;
  register: any;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}
