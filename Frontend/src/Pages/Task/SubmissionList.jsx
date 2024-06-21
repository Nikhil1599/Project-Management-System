/* eslint-disable react/jsx-key */
import { Box, Modal } from "@mui/material";
import SubmissionCard from "./TaskCard/SubmissionCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
};

const submissions = [1, 1, 1];

// eslint-disable-next-line react/prop-types
export default function SubmissionList({ handleClose, open }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {submissions.length > 0 ? (
          <div className="">
            {submissions.map((item) => (
              <SubmissionCard />
            ))}
          </div>
        ) : (
          <div className="text-center">No Submission found</div>
        )}
      </Box>
    </Modal>
  );
}
