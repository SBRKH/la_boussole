import React from "react";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

interface SuccessProps {
  open: boolean,
  onClose: () => void,
  message: string,
}

export const Success: React.FC<SuccessProps> = (props) => {
  const { open, onClose, message } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
}