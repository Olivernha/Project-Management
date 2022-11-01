import React from "react";
import { Box,TextField,Button } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const  [usernameErrText, setUsernameErrText] = React.useState("");
  const [ passwordErrText, setPasswordErrText] = React.useState("");
  const [confirmPasswordErrText, setConfirmPasswordErrText] = React.useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setUsernameErrText("");
    setPasswordErrText("");
    setConfirmPasswordErrText("");

    const data = new FormData(e.target);
    const username= data.get("username").trim();
    const password = data.get("password").trim();
    const confirmPassword = data.get("confirmPassword").trim();

    let err = false;
    if(username === ""){
      err = true;
      setUsernameErrText("Please enter a username");
    }
    if(password === ""){
      err = true;
      setPasswordErrText("Please enter a password");
    }
    if(confirmPassword === ""){
      err = true;
      setConfirmPasswordErrText("Please confirm your password");
    }
    if(password !== confirmPassword){
      err = true;
      setConfirmPasswordErrText("Passwords do not match");
    }
    if(err){
      return;
    }

  };
  return (
    <>
    <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        disabled={loading}
        error={usernameErrText !== ""}
        helperText={usernameErrText}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="Password"
        type="password"
        name="password"
        disabled={loading}
        error={passwordErrText !== ""}
        helperText={passwordErrText}
      />
       <TextField
        margin="normal"
        required
        fullWidth
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        disabled={loading}
        error={confirmPasswordErrText !== ""}
        helperText={confirmPasswordErrText}
      />
      <LoadingButton
        sx={{ mt: 3, mb: 2 }}
        variant="outlined"
        fullWidth
        color="success"
        type="submit"
        loading={loading}
      >Signup</LoadingButton>
    </Box>
    <Button
      component={Link}
      to="/login"
      sx={{textTransform: 'none'}}
    >
      Already have an account? Login
    </Button>
  </>
  )
}

export default Signup