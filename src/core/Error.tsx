import React from "react";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

interface ErrorProps {
  open: boolean,
  onClose: () => void,
  message: string,
}

export const Error: React.FC<ErrorProps> = (props) => {
  const { open, onClose, message } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
}