import { Stack, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormWrapper from "../../../wrapper/FormWrapper";
import { IResume } from "../../../interfaces/resume.interface";

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
type ProfileFormProps = IResume & {
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
  return (
    <>
      {/* Wrapper for the entire form with a specified title */}
      <FormWrapper title="Profile" name={<AccountCircleIcon />}>
        <Stack direction={"column"} spacing={2} margin={1}>
          <Stack direction={"row"} spacing={2}>
            <TextField
              label="First Name"
              placeholder="John"
              fullWidth
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => updateFields({ firstname: e.target.value })}
            />
            <TextField
              label="Last Name"
              placeholder="Kennedy"
              fullWidth
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => updateFields({ lastname: e.target.value })}
            />
          </Stack>
          <TextField
            label="Title"
            type="text"
            placeholder="UI Designer"
            name="Title"
            value={title}
            onChange={(e) => updateFields({ title: e.target.value })}
          />
          <TextField
            label="Address Line 01"
            name="street"
            placeholder="18/B"
            type="text"
            value={street}
            onChange={(e) => updateFields({ street: e.target.value })}
          />
          <TextField
            label="Address Line 02"
            name="state"
            placeholder="queens street"
            type="text"
            value={state}
            onChange={(e) => updateFields({ state: e.target.value })}
          />
          <TextField
            label="Address Line 03"
            name="city"
            placeholder="London"
            type="text"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
          />
          <TextField
            label="Contact"
            name="phone"
            placeholder="4565 565 5659"
            type="tel"
            value={phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
          />
          <TextField
            label="Website"
            name="website"
            placeholder="kenndy.com"
            type="text"
            value={website}
            onChange={(e) => updateFields({ website: e.target.value })}
          />
          <TextField
            label="Mail"
            name="mail"
            placeholder="jkennedy@gmail.com"
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
