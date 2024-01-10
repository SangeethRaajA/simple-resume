import FormWrapper from "../../../wrapper/FormWrapper";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AddButton from "../../atmos/Buttons/AddButton";

type WorkData = {
  work: {
    wname: string;
    role: string;
    sdate: Date;
    edate: Date;
    wdesc: string;
  };
};

type WorkFormProps = WorkData & {
  updateFields: (fields: Partial<WorkData>) => void;
};
const WorkForm = (props: WorkFormProps) => {
  const { work, updateFields } = props;
  const { wname, role, sdate, edate, wdesc } = work;
  return (
    <>
      <FormWrapper title="Work Experience" name={<WorkIcon />}>
        <Stack direction={"column"} spacing={2} margin={2}>
          <Typography>Work Place Name</Typography>
          <TextField
            placeholder="Name"
            type="text"
            value={wname}
            onChange={(e) =>
              updateFields({ work: { ...work, wname: e.target.value } })
            }
          />
          <Typography>Job Role</Typography>
          <TextField
            placeholder="Role"
            type="text"
            value={role}
            onChange={(e) =>
              updateFields({ work: { ...work, role: e.target.value } })
            }
          />
          <Grid container spacing={2} sx={{ margin: "5%", flexGrow: 1 }}>
            <Grid xs={6}>
              <Typography>Start date</Typography>
              <TextField
                type="date"
                value={sdate.toISOString().split("T")[0]}
                onChange={(e) =>
                  updateFields({
                    work: { ...work, sdate: new Date(e.target.value) },
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
                    work: { ...work, edate: new Date(e.target.value) },
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
            value={wdesc}
            onChange={(e) =>
              updateFields({ work: { ...work, wdesc: e.target.value } })
            }
          />
          <AddButton />
        </Stack>
      </FormWrapper>
    </>
  );
};

export default WorkForm;
