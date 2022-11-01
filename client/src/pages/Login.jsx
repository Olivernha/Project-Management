import React from "react";
import { Box,TextField,Button } from "@mui/material";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = (e) => {};
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
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
          loading={loading}
        >Login</LoadingButton>
      </Box>
      <Button
        component={Link}
        to="/signup"
        sx={{textTransform: 'none'}}
      >
        Don't have an account? Sign Up
      </Button>
    </>
  );
};

export default Login;
