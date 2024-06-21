import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const tags = [
  "Angular",
  "Java",
  "Spring Boot",
  "React",
  "Microservices",
  "Python",
  "Node Js",
];

// eslint-disable-next-line react/prop-types
export default function UpdateTaskForm({ handleClose, open }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
    deadline: new Date(),
  });

  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTagsChange = (event, value) => {
    setSelectedTags(value);
    setFormData({
      ...formData,
      tags: value,
    });
  };

  const handleDeadlineChange = (date) => {
    setFormData({
      ...formData,
      deadline: date,
    });
  };

  const formateDate = (input) => {
    let {
      $y: year,
      $M: month,
      $D: day,
      $H: hours,
      $m: minutes,
      $s: seconds,
      $ms: milliseconds,
    } = input;
    const date = new Date(
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      milliseconds
    );

    const formatedDate = date.toISOString();

    return formatedDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { deadline } = formData;
    formData.tags = selectedTags;
    formData.deadline = formateDate(deadline);
    console.log("FormData: ", formData, "Deadline", deadline);
    handleClose();
  };

  useEffect(() => {}, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                name="title"
                value={FormData.title}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image"
                fullWidth
                name="image"
                value={FormData.image}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                name="description"
                value={FormData.description}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="multiple-limit-tags"
                options={tags}
                onChange={handleTagsChange}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField label="Tags" fullWidth {...params} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  onChange={handleDeadlineChange}
                  className="w-full"
                  label="Deadline"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#3F0FB7",
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "10px 16px",
                }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
