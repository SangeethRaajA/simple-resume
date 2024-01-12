import { ChangeEvent, FC } from "react";
import { Button, TextField, Grid, Typography, Stack } from "@mui/material";
import FormWrapper from "../../../wrapper/FormWrapper";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SchoolIcon from "@mui/icons-material/School";

type EducationData = {
  edu: {
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
  const { edu, updateFields } = props;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    const updatedWorks = edu.map((entry, i) =>
      i === index ? { ...entry, [name]: value } : entry
    );

    updateFields({ edu: updatedWorks });
  };

  const addEducationEntry = () => {
    const newEntry = {
      ename: "",
      estudy: "",
      sdate: new Date(),
      edate: new Date(),
      edesc: "",
    };
    updateFields({ edu: [...edu, newEntry] });
  };

  // const handleSubmit = (e: FormEvent) => {
  const handleSubmit = () => {
    // e.preventDefault();
    console.log("Submitted Data:", edu);
  };

  const handleDelete = (i: number) => {
    const updatedWorks = [...edu];
    updatedWorks.splice(i, 1);
    updateFields({ edu: updatedWorks });
  };

  return (
    <>
      <FormWrapper title="Education" name={<SchoolIcon />}>
        <Stack direction={"column"} spacing={2} margin={2}>
          <Grid container spacing={2} margin={2}>
            <form onSubmit={handleSubmit}>
              {edu.map((entry, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={12}>
                    <Typography variant="h6">Education {index + 1}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Academy Name"
                      placeholder="Name"
                      fullWidth
                      required={true}
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
                      name="estudy"
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
                      startIcon={<DeleteIcon />}
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
