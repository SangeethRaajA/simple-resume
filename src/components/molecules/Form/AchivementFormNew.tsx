import { FC, useState } from "react";
import {
  Button,
  TextField,
  Stack,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormWrapper from "../../../wrapper/FormWrapper";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";

type AchivmentData = {
  achievements: string[];
};

type AchivementFormProps = AchivmentData & {
  updateFields: (fields: Partial<AchivmentData>) => void;
};

const AchivementFormNew: FC<AchivementFormProps> = ({
  achievements,
  updateFields,
}) => {
  const [newAchivement, setNewAchivement] = useState<string>("");

  const handleSubmit = () => {
    updateFields({ achievements: [...achievements, newAchivement] });
    setNewAchivement("");
  };

  const handleRemove = (index: number) => {
    const updatedAchivements = achievements.filter((_, i) => i !== index);
    updateFields({ achievements: updatedAchivements });
  };

  return (
    <FormWrapper title="Achivement" name={<InfoIcon />}>
      <Stack spacing={2} margin={2}>
        {achievements.map((achievement, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1">{achievement}</Typography>
            <Button
              color="error"
              onClick={() => handleRemove(index)}
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Remove
            </Button>
          </Paper>
        ))}

        <Grid
          container
          spacing={2}
          marginBottom={2}
          marginLeft={2}
          display="flex"
        >
          <Grid item xs={8}>
            <TextField
              label="Add Achivement"
              variant="outlined"
              fullWidth
              value={newAchivement}
              onChange={(e) => setNewAchivement(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              type="button"
              variant="contained"
              startIcon={<AddIcon />}
              size="large"
              color="success"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </FormWrapper>
  );
};

export default AchivementFormNew;
