import * as React from "react";

import { Rating } from "@material-ui/lab";
import { RatingProps } from "./types";
import Typography from "@material-ui/core/Typography";

export const RequiredRating: React.FC<{ ratingProps: RatingProps }> = ({
  ratingProps,
}) => {
  const { errors, register, rating, setRating } = ratingProps;

  const hasError = errors && Object.keys(errors).includes("rating");
  console.log(errors);
  return (
    <>
      <Typography component="legend">Rating</Typography>

      <Rating
        name="rating-control"
        value={rating}
        onChange={(_, value) => {
          setRating(value ?? 0);
        }}
      />

      <input
        type="hidden"
        value={rating}
        {...register("rating", {
          validate: () => {
            if (rating < 1) return "Rating must be atleast 1";
            if (rating > 5) return "Rating can not be more than 5";
            // const f = value >= 1 && value <= 5;
            return null;
          },
        })}
      />
      {hasError && (
        <p className="MuiFormHelperText-root Mui-error MuiFormHelperText-marginDense">
          {errors["rating"].message}
        </p>
      )}
    </>
  );
};
