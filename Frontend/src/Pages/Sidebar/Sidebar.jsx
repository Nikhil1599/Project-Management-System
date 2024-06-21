import { Avatar } from "@mui/material";
import { useState } from "react";
import "./Sidebar.css";
import CreateTaskForm from "../Task/CreateTaskForm";

const Sidebar = () => {
  const menu = [
    { name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
    { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
    { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
    { name: "NOT ASSIGNED", value: "PENDING", role: ["ROLE_ADMIN"] },
    { name: "Create New Task", value: "Create New Task", role: ["ROLE_ADMIN"] },
    { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] },
  ];

  const role = "ROLE_ADMIN";

  const [activeMenu, setActiveMenu] = useState("Home");
  const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);

  const handleOpenCreateTaskForm = () => {
    setOpenCreateTaskForm(true);
  };

  const handleCloseCreateTaskForm = () => {
    setOpenCreateTaskForm(false);
  };

  const handleMenuChange = (item) => {
    if (item.name == "Create New Task") {
      handleOpenCreateTaskForm();
    }
    setActiveMenu(item.name);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <>
      <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
        <div className="space-y-5 h-full">
          <div className="flex justify-center">
            <Avatar
              sx={{ width: "8rem", height: "8rem" }}
              className="border-2 border-primaryColor"
              src="C:/Users/nikhi/OneDrive/Pictures/photo.jpg"
              alt="image1"
            />
          </div>
          {menu
            .filter((item) => item.role.includes(role))
            .map((item) => (
              <p
                key={item.name}
                onClick={() => handleMenuChange(item)}
                className={`py-3 px-5 rounded-md text-center cursor-pointer 
                ${activeMenu === item.name ? "activeMenuItem" : "menuItem"}`}
              >
                {item.name}
              </p>
            ))}
          <button
            onClick={handleLogout}
            className="logoutButton py-3 px-5 rounded-md text-center cursor-pointer w-full"
          >
            Log out
          </button>
        </div>
      </div>
      <CreateTaskForm
        open={openCreateTaskForm}
        handleClose={handleCloseCreateTaskForm}
      />
    </>
  );
};

export default Sidebar;
