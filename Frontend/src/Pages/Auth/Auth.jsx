import { useState } from "react";
import LoginForm from "./Login";
import SignupForm from "./Signup";
import { Button, Typography } from "@mui/material";

const Auth = () => {
  const [showSignup, setShowSignup] = useState(false);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <Typography variant="h3" align="center" className="text-3xl mb-8">
          {showSignup ? "Register" : "Login"}
        </Typography>
        {showSignup ? <SignupForm /> : <LoginForm />}
        <Button
          fullWidth
          variant="text"
          className="mt-4 text-blue-500 hover:underline"
          onClick={toggleForm}
        >
          <Typography variant="body1" align="center">
            {showSignup ? "Login" : "Register"}
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default Auth;
