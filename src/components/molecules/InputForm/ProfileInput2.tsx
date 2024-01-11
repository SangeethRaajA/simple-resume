import { IResume } from "../../../interfaces/resume.interface";
import { useFormik } from "formik";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import validationSchema from "../../../validations/resumeValidation";

interface FormProps {
  onSubmit: (data: IResume) => void;
}

const initialValues: IResume = {
  firstname: "",
  lastname: "",
  title: "",
  street: "",
  city: "",
  state: "",
  phone: "",
  website: "",
  mail: "",
  objective: "",
};

const ProfileInput2 = ({}: FormProps) => {
  const onSubmit = (values: any) => {
    // Handle form submission logic here
    // like making an API call or updating the store
  };

  const validate = (values: any) => {
    // Implement form validation logic
    // Eg. Custom form validations
    // Eg. Form validations based on other form fields
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Profile Form
            <hr />
          </Typography>

          <Grid>
            <TextField
              label="First Name"
              variant="outlined"
              color="info"
              type="text"
              name="firstname"
              placeholder="John"
              sx={{ mb: 3 }}
              fullWidth
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              color="info"
              type="text"
              name="lastname"
              label="Last Name"
              placeholder="John"
              sx={{ mb: 3 }}
              fullWidth
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              color="info"
              type="text"
              name="title"
              label="Tile"
              placeholder="UI Designer"
              sx={{ mb: 3 }}
              fullWidth
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              color="info"
              type="text"
              name="street"
              label="Address Line 01"
              placeholder="house 03/7"
              sx={{ mb: 3 }}
              fullWidth
              value={formik.values.street}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              color="info"
              type="text"
              name="city"
              label="Address Line 02"
              placeholder="Kennedy Street"
              sx={{ mb: 3 }}
              fullWidth
              value={formik.values.city}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              color="info"
              type="text"
              name="state"
              label="Address Line 03"
              placeholder="New York"
              sx={{ mb: 3 }}
              fullWidth
              value={formik.values.state}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              color="info"
              type="number"
              name="phone"
              label="Phone"
              placeholder="+54 777 999 093"
              sx={{ mb: 3 }}
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              color="info"
              type="text"
              name="website"
              label="Website"
              placeholder="jondeweb.com"
              sx={{ mb: 3 }}
              fullWidth
              value={formik.values.website}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid>
            <TextField
              variant="outlined"
              color="info"
              type="mail"
              name="mail"
              label="Mail"
              placeholder="user@gmail.com"
              sx={{ mb: 3 }}
              fullWidth
              value={formik.values.mail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mail && Boolean(formik.errors.mail)}
              helperText={formik.touched.mail && formik.errors.mail}
            />
          </Grid>
          <Grid display="flex" justifyContent="right" alignItems="right">
            <Button
              variant="contained"
              size="large"
              color="success"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default ProfileInput2;
