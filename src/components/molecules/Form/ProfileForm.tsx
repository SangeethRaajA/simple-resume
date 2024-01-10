import { Grid, Stack, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import FormWrapper from "../../../wrapper/FormWrapper";

// Defining the data structure for profile information
type ProfileData = {
  firstname: string;
  lastname: string;
  title: string;
  street: string;
  city: string;
  state: string;
  phone: string;
  website: string;
  mail: string;
};

// Combining profile data with a function to update fields
type ProfileFormProps = ProfileData & {
  updateFields: (fields: Partial<ProfileData>) => void;
};

// React functional component for the profile form
const ProfileForm = ({
  firstname,
  lastname,
  title,
  street,

  
  city,
  state,
  phone,
  website,
  mail,
  updateFields,
}: ProfileFormProps) => {
  const [data, setData] = useState();

  return (
    <>
      {/* Wrapper for the entire form with a specified title */}
      <FormWrapper title="Profile" name={<AccountCircleIcon />}>
        <Stack direction={"column"} spacing={2} margin={2}>
          <Grid container spacing={2} margin={2}>
            <Grid xs={5}>
              <Typography>First Name</Typography>
              <TextField
                placeholder="First Name"
                type="text"
                value={firstname}
                // Update the first name on input change
                onChange={(e) => updateFields({ firstname: e.target.value })}
              />
            </Grid>
            <Grid xs={1} />
            <Grid xs={5}>
              <Typography>Last Name</Typography>
              <TextField
                placeholder="Lastname Name"
                type="text"
                value={lastname}
                onChange={(e) => updateFields({ lastname: e.target.value })}
              />
            </Grid>
          </Grid>
          <Typography>Title</Typography>
          <TextField
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => updateFields({ title: e.target.value })}
          />
          <Typography>Address Line 01</Typography>
          <TextField
            placeholder="Street"
            type="text"
            value={street}
            onChange={(e) => updateFields({ street: e.target.value })}
          />
          <Typography>Address Line 02</Typography>
          <TextField
            placeholder="City"
            type="text"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
          />
          <Typography>Address Line 03</Typography>
          <TextField
            placeholder="State"
            type="text"
            value={state}
            onChange={(e) => updateFields({ state: e.target.value })}
          />
          <Typography>Contact Number</Typography>
          <TextField
            placeholder="Contact"
            type="tel"
            value={phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
          />
          <Typography>Website</Typography>
          <TextField
            placeholder="Website"
            type="text"
            value={website}
            onChange={(e) => updateFields({ website: e.target.value })}
          />
          <Typography>Email Address</Typography>
          <TextField
            placeholder="Email"
            type="mail"
            value={mail}
            onChange={(e) => updateFields({ mail: e.target.value })}
          />
        </Stack>
      </FormWrapper>
    </>
  );
};

export default ProfileForm;