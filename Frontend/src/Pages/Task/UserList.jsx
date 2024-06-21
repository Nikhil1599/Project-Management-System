/* eslint-disable react/jsx-key */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
};

const tasks = [1, 1, 1, 1];

// eslint-disable-next-line react/prop-types
export default function UserList({ handleClose, open }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex flex-col gap-1">
          {tasks.map((item, index) => (
            <>
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar src="" alt="User Avatar" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Nikhiles"
                    secondary="nikhi_with_nisa"
                  />
                </ListItem>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#CE4100",
                    color: "#fff",
                    borderRadius: "4px",
                    padding: "6px 12px",
                  }}
                >
                  Select
                </Button>
              </div>
              {index !== tasks.length - 1 && <Divider variant="inset" />}
            </>
          ))}
        </div>
      </Box>
    </Modal>
  );
}
