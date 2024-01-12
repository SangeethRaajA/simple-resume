import { ChangeEvent, FC } from "react";
import { Button, TextField, Grid, Typography, Stack } from "@mui/material";
import FormWrapper from "../../../wrapper/FormWrapper";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SchoolIcon from "@mui/icons-material/School";

type EducationData = {
  educations: {
    id: number;
    ename: string;
    estudy: string;
    sdate: Date;
    edate: Date;
    edesc: string;
  }[];
};

type EducationFormProps = EducationData & {
  updateFields: (fields: Partial<EducationData>) => void;
};

const EducationFormNew: FC<EducationFormProps> = (props) => {
  const { educations, updateFields } = props;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    const updatedWorks = educations.map((entry, i) =>
      i === index ? { ...entry, [name]: value } : entry
    );

    updateFields({ educations: updatedWorks });
  };

  const addEducationEntry = () => {
    const newEntry = {
      id: educations.length + 1,
      ename: "",
      estudy: "",
      sdate: new Date(),
      edate: new Date(),
      edesc: "",
    };
    updateFields({ educations: [...educations, newEntry] });
  };

  // const handleSubmit = (e: FormEvent) => {
  const handleSubmit = () => {
    // e.preventDefault();
    console.log("Submitted Data:", educations);
  };

  const handleDelete = (i: any) => {
    const deleteVal = [...educations];
    deleteVal.slice(i, 1);
  };

  return (
    <>
      <FormWrapper title="Education" name={<SchoolIcon />}>
        <Stack direction={"column"} spacing={2} margin={2}>
          <Grid container spacing={2} margin={2}>
            <form onSubmit={handleSubmit}>
              {educations.map((entry, index) => (
                <Grid container spacing={2} key={entry.id}>
                  <Grid item xs={12}>
                    <Typography variant="h6">Education {index + 1}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Academy Name"
                      placeholder="Name"
                      fullWidth
                      required
                      name="ename"
                      value={entry.ename}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Field Of Study"
                      fullWidth
                      required
                      name="role"
                      value={entry.estudy}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Start Date"
                      type="date"
                      fullWidth
                      required
                      name="sdate"
                      value={entry.sdate}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="End Date"
                      type="date"
                      fullWidth
                      required
                      name="edate"
                      value={entry.edate}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Description Experience"
                      label="Describe Experience"
                      fullWidth
                      multiline
                      name="edesc"
                      value={entry.edesc}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={() => handleDelete(index)}
                      variant="contained"
                      color="error"
                      startIcon={<RemoveIcon />}
                    >
                      Delete
                    </Button>
                  </Grid>
                  <hr />
                </Grid>
              ))}

              <Grid container marginTop={2}>
                <Button
                  type="button"
                  variant="contained"
                  startIcon={<AddIcon />}
                  size="large"
                  color="success"
                  onClick={addEducationEntry}
                >
                  Education
                </Button>
              </Grid>
            </form>
          </Grid>
        </Stack>
      </FormWrapper>
    </>
  );
};

export default EducationFormNew;
