import { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup form", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-2 p-6">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <TextField
            name="fullname"
            label="Full Name"
            type="text"
            value={formData.fullname}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            size="medium"
          />
        </div>
        <div className="flex flex-col">
          <TextField
            name="email"
            label="Email"
            type="email"
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
        <div className="flex flex-col">
          <FormControl fullWidth variant="outlined" required size="medium">
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              name="role"
              value={formData.role}
              onChange={handleChange}
              label="Role"
              fullWidth
            >
              <MenuItem value="ROLE_ADMIN">Admin</MenuItem>
              <MenuItem value="ROLE_USER">User</MenuItem>
            </Select>
          </FormControl>
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
