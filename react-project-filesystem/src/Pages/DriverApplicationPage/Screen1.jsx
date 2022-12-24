import React from "react";
import {
  TextField,
  Grid,
  Typography,
  CardContent,
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import Select from "@mui/material/Select";
import { useState } from "react";
import { forwardRef } from "react";
import { useRef, useEffect } from "react";
import { StyledInput, StyledSpan } from "./StyledComponents";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Screen1 = (props) => {
  const { state, setState } = props;

  const [open, setOpen] = useState(false);
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  window.onload = () => {
    const eInput = document.getElementById("echeck");
    const tInput = document.getElementById("tcheck");
    eInput.onpaste = (e) => e.preventDefault();
    tInput.onpaste = (e) => e.preventDefault();
  };

  const handlePositionChange = (event) => {
    setState((state) => ({ ...state, Position: event.target.value }));
  };

  useEffect(() => {
    // Clear the custom error message for the email field if it matches the email check field
    if (state.Email === state.EmailCheck) {
      emailRef.current.setCustomValidity("");
      emailRef.current.reportValidity();
    }
  }, [state.Email, state.EmailCheck]);

  useEffect(() => {
    // Clear the custom error message for the phone number field if it matches the phone number check field
    if (state.PhoneNumber === state.PhoneNumberCheck) {
      phoneNumberRef.current.setCustomValidity("");
      phoneNumberRef.current.reportValidity();
    }
  }, [state.PhoneNumber, state.PhoneNumberCheck]);

  const handleOpenDialog = () => {
    if (formRef.current.checkValidity()) {
      // Form is valid, check email and phone number fields
      if (state.Email !== state.EmailCheck) {
        emailRef.current.setCustomValidity(
          "Entered e-mail adresses are not matching"
        );
        emailRef.current.reportValidity();
        return;
      }
      if (state.PhoneNumber !== state.PhoneNumberCheck) {
        phoneNumberRef.current.setCustomValidity(
          "Entered phone numbers are not matching"
        );
        phoneNumberRef.current.reportValidity();
        return;
      }
      // Both email and phone number fields are valid
      setOpen(true);
    } else {
      // Form is invalid, display errors
      formRef.current.reportValidity();
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleClickSubmit = () => {
    emailjs
      .sendForm(
        "default_service",
        "template_5muable",
        formRef.current,
        "Bt5FJk_8UapAuvKNi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setOpen(false);
    formRef.current.reset();
  };

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  return (
    <form ref={formRef}>
      <CardContent>
        <Grid item xs={12}>
          <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
            {" "}
            Fill out the form, and our recuriting team will get back at you as
            soon as posible!{" "}
          </Typography>
          <Typography variant="body3" component="p" sx={{ margin: "1ch" }}>
            {" "}
            * Symbol marks a{" "}
            <span style={{ color: "rgb(255, 0, 0)" }}>required</span> field{" "}
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StyledInput
              name="FirstName"
              color="red"
              label="First Name"
              placeholder=""
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.FirstName}
            ></StyledInput>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="LastName"
              color="red"
              label="Last Name"
              placeholder=""
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.LastName}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="email"
              name="Email"
              color="red"
              label="Email"
              placeholder="@"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.Email}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              inputRef={emailRef}
              id="echeck"
              type="email"
              name="EmailCheck"
              color="red"
              label="Enter your email again for validation"
              placeholder="@"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.EmailCheck}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="tel"
              name="PhoneNumber"
              color="red"
              label="Phone Number"
              placeholder="+1"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.PhoneNumber}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              inputRef={phoneNumberRef}
              id="tcheck"
              type="tel"
              name="PhoneNumberCheck"
              color="red"
              label="Enter your number again for validation"
              placeholder="+1"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.PhoneNumberCheck}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="select-label">Position</InputLabel>
                <Select
                  name="Position"
                  labelId="select-label"
                  id="select"
                  value={state.Position}
                  label="I am applying for the position of:"
                  onChange={handlePositionChange}
                >
                  <MenuItem value={"Owner Operator"}>Owner Operator</MenuItem>
                  <MenuItem value={"Company driver"}>Company driver</MenuItem>
                  <MenuItem value={"Paid by %"}>Paid by % </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {state.Compare === false && (
              <div>
                <Button
                  variant="outlined"
                  onClick={handleOpenDialog}
                  fullWidth
                  maxHeight
                >
                  Submit Application
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleCloseDialog}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle sx={{ textAlign: "center" }}>
                    {"Are you sure you want to submit?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      You can provide aditional data on pages 2 and 3. Providing
                      us with more information means our team will be
                      <StyledSpan>
                        prioritizing your application
                      </StyledSpan>{" "}
                      over the others.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleClickSubmit}>Submit</Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </form>
  );
};
