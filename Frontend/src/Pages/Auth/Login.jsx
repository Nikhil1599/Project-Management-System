import { useState } from "react";
import { Button, TextField } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login form ", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-6 ">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <TextField
            id="email"
            label="Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            size="medium"
          />
        </div>
        <div className="flex flex-col">
          <TextField
            id="password"
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            size="medium"
          />
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#3F0FB7",
            color: "#fff",
            borderRadius: "4px",
            padding: "10px 16px",
            "&:hover": {
              backgroundColor: "#4F1FC8",
            },
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
