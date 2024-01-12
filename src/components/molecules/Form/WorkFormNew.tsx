import { ChangeEvent, FC } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import FormWrapper from "../../../wrapper/FormWrapper";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type WorkData = {
  works: {
    id: number;
    wname: string;
    role: string;
    sdate: Date;
    edate: Date;
    wdesc: string;
  }[];
};

type WorkFormProps = WorkData & {
  updateFields: (fields: Partial<WorkData>) => void;
};

const WorkFormNew: FC<WorkFormProps> = (props) => {
  const { works, updateFields } = props;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    const updatedWorks = works.map((entry, i) =>
      i === index ? { ...entry, [name]: value } : entry
    );

    updateFields({ works: updatedWorks });
  };

  const addWorkEntry = () => {
    const newEntry = {
      id: works.length + 1,
      wname: "",
      role: "",
      sdate: new Date(),
      edate: new Date(),
      wdesc: "",
    };
    updateFields({ works: [...works, newEntry] });
  };

  // const handleSubmit = (e: FormEvent) => {
  const handleSubmit = () => {
    // e.preventDefault();
    console.log("Submitted Data:", works);
  };

  const handleDelete = (i: any) => {
    const deleteVal = [...works];
    deleteVal.slice(i, 1);
  };

  return (
    <>
      <FormWrapper title="Work Experience" name={<WorkIcon />}>
        <Stack direction={"column"} spacing={2} margin={2}>
          <Grid container spacing={2} margin={2}>
            <form onSubmit={handleSubmit}>
              {works.map((entry, index) => (
                <Grid container spacing={2} key={entry.id}>
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Work Experience {index + 1}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Company Name"
                      fullWidth
                      required
                      name="wname"
                      value={entry.wname}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Role"
                      fullWidth
                      required
                      name="role"
                      value={entry.role}
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
                      placeholder="Description Work Experience"
                      label="Describe Work Experience"
                      fullWidth
                      multiline
                      name="wdesc"
                      value={entry.wdesc}
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

              {/* <Grid container marginBottom={2} marginLeft={2} display="flex"> */}
              <Grid container marginTop={2}>
                <Button
                  type="button"
                  variant="contained"
                  startIcon={<AddIcon />}
                  size="large"
                  color="success"
                  onClick={addWorkEntry}
                >
                  Work Experience
                </Button>
              </Grid>
            </form>
          </Grid>
        </Stack>
      </FormWrapper>
    </>
  );
};

export default WorkFormNew;
