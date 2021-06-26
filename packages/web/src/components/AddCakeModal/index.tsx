import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";
import { Cake } from "../CakeViewer/types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import { RequiredRating } from "../RequiredRating/index";
import { TextBoxWithValidation } from "../TextBox/index";
import { sendAddNewCakeRequest } from "./ajax";

interface IFormInputs {
  comment: string;
  name: string;
  imageUrl: string;
  rating: number;
}
export const AddCakeModal: React.FC<{
  setCakes: React.Dispatch<React.SetStateAction<Cake[]>>;
}> = ({ setCakes }): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    data.rating = rating;
    sendAddNewCakeRequest(
      data.name,
      data.comment,
      data.imageUrl,
      data.rating,
      setCakes
    );
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ float: "right" }}
      >
        Add a new Cake
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form id="frm" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="form-dialog-title">Add a new cake</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can add a new cake here to your list
            </DialogContentText>
            <TextBoxWithValidation
              textBoxProps={{
                errors,
                control,
                name: "name",
                label: "Name:",
                requiredMessage: "Name is required",
                maximumLength: 30,
                maximumLengthMessage: "Name must be less than 30 characters",
              }}
            />
            <TextBoxWithValidation
              textBoxProps={{
                errors,
                control,
                name: "comment",
                label: "Comment:",
                requiredMessage: "Comment is required",
                maximumLength: 200,
                maximumLengthMessage:
                  "Comment must be less than 200 characters",
              }}
            />
            <TextBoxWithValidation
              textBoxProps={{
                errors,
                control,
                name: "imageUrl",
                label: "Image Url:",
                requiredMessage: "Image Url is required",
              }}
            />

            <RequiredRating
              ratingProps={{ errors, register, rating, setRating }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={(e: any) => {
                // document.getElementById("frm").submit();
              }}
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
