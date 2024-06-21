import MoreVert from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { useState } from "react";
import UserList from "../UserList";
import Submission from "../SubmissionList";
import EditTaskForm from "../EditTaskCard";

const TaskCard = () => {
  const role = "ROLE_ADMIN";
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);

  const handleCloseUserList = () => {
    setOpenUserList(false);
    handleClose();
  };

  const handleOpenUserList = () => {
    // Function to handle opening user list
    setOpenUserList(true);
    handleClose();
  };

  const [openSubmissionList, setOpenSubmissionList] = useState(false);

  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
    handleClose();
  };

  const handleOpenSubmissionList = () => {
    setOpenSubmissionList(true);
    handleClose();
  };

  const [openEditTask, setOpenEditTask] = useState(false);
  const handleOpenUpdateTaskModel = () => {
    setOpenEditTask(true);
    handleClose();
  };

  const handleCloseUpdateTaskModel = () => {
    setOpenEditTask(false);
    handleClose();
  };

  const handleDeleteTask = () => {
    // Function to handle deleting the task
    console.log("Delete Task");
    handleClose();
  };

  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="lg:w-[7rem] lg:h-[7rem] object-cover">
            <img
              src="C:/Users/nikhi/OneDrive/Pictures/photo.jpg"
              alt="Car Rental Website"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Car Rental Website</h1>
              <p className="text-gray-500 text-sm">
                Use latest framework and technology to make this website
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {[1, 2, 3, 4].map((item, index) => (
                <span key={index} className="py-1 px-5 rounded-[3px] techStack">
                  Angular
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {role === "ROLE_ADMIN" && (
              <>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>
                  See Submissions
                </MenuItem>
                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </>
            )}
          </Menu>
        </div>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <Submission
        open={openSubmissionList}
        handleClose={handleCloseSubmissionList}
      />
      <EditTaskForm
        open={openEditTask}
        handleClose={handleCloseUpdateTaskModel}
      />
    </div>
  );
};

export default TaskCard;
