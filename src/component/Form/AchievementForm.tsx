import FormWrapper from "../../wrapper/FormWrapper";
import { Stack, TextField } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
type AchievementData = {
  achievement: string[];
};

type AchievementFormProps = AchievementData & {
  updateFields: (fields: Partial<AchievementData>) => void;
};

const AchievementForm = ({
  achievement,
  updateFields,
}: AchievementFormProps) => {
  return (
    <>
      <FormWrapper title="Achievement" name={<InfoIcon />}>
        <Stack direction={"column"} spacing={2} margin={2}>
          <TextField
            placeholder="Describe your achivement in a paragraph."
            multiline
            rows={2}
            maxRows={4}
            type="text"
            value={achievement.join("\n")}
            // Update the first name on input change
            onChange={(e) =>
              updateFields({ achievement: e.target.value.split("\n") })
            }
          />
        </Stack>
      </FormWrapper>
    </>
  );
};

export default AchievementForm;
