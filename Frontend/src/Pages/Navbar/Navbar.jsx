import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
      <AppBar position="static">
        <Toolbar className="flex justify-between bg-primaryColor">
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="text-white"
          >
            PMS Platform
          </Typography>
          <Avatar sx={{ backgroundColor: "#FEB60D" }}>C</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
