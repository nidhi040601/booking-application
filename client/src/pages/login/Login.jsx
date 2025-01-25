import Sheet from "@mui/joy/Sheet";
import { Button, FormControl, FormLabel, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const handleInputChange = (event) => {
    setCredentials({ ...credentials, [event.target.id]: event.target.value });
  };

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleLoginButtonClick = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err.response.data });
    }
  };

  console.log("userr222", user);

  return (
    <Sheet
      sx={{
        width: 300,
        mx: "auto",
        my: 8,
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
    >
      <Typography variant="h6" component="h1">
        Welcome!
      </Typography>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          id="username"
          onChange={handleInputChange}
          placeholder="johndoe@email.com"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="password"
          id="password"
          onChange={handleInputChange}
          placeholder="password"
        />
      </FormControl>
      <Button onClick={handleLoginButtonClick} sx={{ mt: 1 /* margin top */ }}>
        Log in
      </Button>
      {error ? <span>{error.message}</span> : null}
    </Sheet>
  );
};

export default Login;
