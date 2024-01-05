import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import { IProfile } from "../../interfaces/profile.interface";

const ProfileInput = () => {
  const [inputList, setInputList] = useState<IProfile>({
    firstname: "",
    lastname: "",
    title: "",
    address: "",
    phone: "",
    website: "",
    mail: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputList({
      ...inputList,
      // firstname: value,
      // ...inputList,
      [name]: value,
    });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          margin: "1%",
          border: "2px solid #ccc",
        }}
      >
        <Stack direction={"column"} spacing={2} margin={2}>
          <Grid container spacing={2} margin={2}>
            <Grid xs={5}>
              <Typography>First Name</Typography>
              <TextField
                placeholder="First Name"
                type="text"
                // value={inputList.firstname}
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={1} />
            <Grid xs={5}>
              <Typography>Last Name</Typography>
              <TextField
                placeholder="Lastname Name"
                type="text"
                // value={inputList.lastname}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Typography>Title</Typography>
          <TextField
            type="text"
            placeholder="Title"
            // value={inputList.title}
          />
          <Typography>Address</Typography>
          <TextField
            placeholder="Address"
            type="text"
            // value={inputList.address}
          />
          <Typography>Contact Number</Typography>
          <TextField
            placeholder="Contact"
            type="tel"
            // value={inputList.phone}
          />
          <Typography>Website</Typography>
          <TextField
            placeholder="Website"
            type="text"
            // value={inputList.website}
          />
          <Typography>Email Address</Typography>
          <TextField
            placeholder="Email"
            type="mail"
            // value={inputList.mail}
          />
          <AddButton />
        </Stack>
      </Box>
    </>
  );
};

export default ProfileInput;
