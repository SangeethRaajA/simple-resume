import { Grid, Stack, TextField, Typography } from "@mui/material";
import AddButton from "../Buttons/AddButton";
import FormWrapper from "../../wrapper/FormWrapper";
import SchoolIcon from '@mui/icons-material/School';

type EducationData = {
  edu: {
    ename: string;
    estudy: string;
    sdate: Date;
    edate: Date;
    edesc: string;
  };
};

type EducationFormProps = EducationData & {
  updateFields: (fields: Partial<EducationData>) => void;
};

const EducationForm = (props: EducationFormProps) => {
  const { edu, updateFields } = props;
  const { ename, estudy, sdate, edate, edesc } = edu;

  return (
    <>
      <FormWrapper title="Education" name={<SchoolIcon/>}>
        <Stack direction="column" spacing={2} margin={2}>
          <Typography>Academy Name</Typography>
          <TextField
            placeholder="Name"
            type="text"
            value={ename}
            onChange={(e) =>
              updateFields({ edu: { ...edu, ename: e.target.value } })
            }
          />

          <Typography>Field Of Study</Typography>
          <TextField
            placeholder="Study"
            type="text"
            value={estudy}
            onChange={(e) =>
              updateFields({ edu: { ...edu, estudy: e.target.value } })
            }
          />

          <Grid container spacing={2} sx={{ margin: "1%", flexGrow: 1 }}>
            <Grid xs={6}>
              <Typography>Start date</Typography>
              <TextField
                type="date"
                value={sdate.toISOString().split("T")[0]}
                onChange={(e) =>
                  updateFields({
                    edu: { ...edu, sdate: new Date(e.target.value) },
                  })
                }
              />
            </Grid>

            <Grid xs={6}>
              <Typography>End date</Typography>
              <TextField
                type="date"
                value={edate.toISOString().split("T")[0]}
                onChange={(e) =>
                  updateFields({
                    edu: { ...edu, edate: new Date(e.target.value) },
                  })
                }
              />
            </Grid>
          </Grid>

          <Typography>Description</Typography>
          <TextField
            placeholder="MultiLine with rows: 2 and rowsMax: 4"
            multiline
            rows={2}
            maxRows={4}
            value={edesc}
            onChange={(e) =>
              updateFields({ edu: { ...edu, edesc: e.target.value } })
            }
          />

          <AddButton />
        </Stack>
      </FormWrapper>
    </>
  );
};

export default EducationForm;
