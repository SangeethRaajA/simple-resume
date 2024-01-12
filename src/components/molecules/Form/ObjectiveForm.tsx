import FormWrapper from "../../../wrapper/FormWrapper";
import { Stack, TextField } from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";

type ObjectiveData = {
  objective: string;
};

type ObjectiveFormProps = ObjectiveData & {
  updateFields: (fields: Partial<ObjectiveData>) => void;
};

const ObjectiveForm = ({ objective, updateFields }: ObjectiveFormProps) => {
  return (
    <>
      <FormWrapper title="Objective" name={<AdsClickIcon />}>
        <Stack direction={"column"} spacing={2} margin={2}>
          <TextField
            placeholder="Describe your object in a paragraph."
            multiline
            rows={2}
            maxRows={4}
            type="text"
            value={objective}
            // Update the first name on input change
            onChange={(e) => updateFields({ objective: e.target.value })}
          />
        </Stack>
      </FormWrapper>
    </>
  );
};

export default ObjectiveForm;
