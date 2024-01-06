import FormWrapper from "../../wrapper/FormWrapper";
import { Stack, TextField } from "@mui/material";

type SkillData = {
  skills: string[];
};

type SkillFormProps = SkillData & {
  updateFields: (fields: Partial<SkillData>) => void;
};

const SkillForm = ({ skills, updateFields }: SkillFormProps) => {
  return (
    <>
      <FormWrapper title="Skill">
        <Stack direction={"column"} spacing={2} margin={2}>
          <TextField
            placeholder="Add Skill"
            type="text"
            value={skills.join("\n")}
            // Update the first name on input change
            onChange={(e) =>
              updateFields({ skills: e.target.value.split("\n") })
            }
          />
        </Stack>
      </FormWrapper>
    </>
  );
};

export default SkillForm;