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
import BuildIcon from "@mui/icons-material/Build";
import AddIcon from "@mui/icons-material/Add";

type SkillData = {
  skills: string[];
};

type SkillFormProps = SkillData & {
  updateFields: (fields: Partial<SkillData>) => void;
};

const SkillFormNew: FC<SkillFormProps> = ({ skills, updateFields }) => {
  const [newSkill, setNewSkill] = useState<string>("");

  const handleSubmit = () => {
    updateFields({ skills: [...skills, newSkill] });
    setNewSkill("");
  };

  const handleRemove = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    updateFields({ skills: updatedSkills });
  };

  return (
    <FormWrapper title="Skill" name={<BuildIcon />}>
      <Stack spacing={2} margin={2}>
        {skills.map((skill, index) => (
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
            <Typography variant="body1">{skill}</Typography>
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
              required
              label="Add Skill"
              variant="outlined"
              fullWidth
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
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

export default SkillFormNew;
