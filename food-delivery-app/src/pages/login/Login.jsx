import { Button, TextField } from "@mui/material";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-form">
      <h2>Login/Signup</h2>
      <div className="container">
        <form action="">
          <div>
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              required
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
              required
            />
          </div>

          <Button
            variant="contained"
            type="submit"
            onClick={() => navigate("/foods")}
          >
            Login/Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
