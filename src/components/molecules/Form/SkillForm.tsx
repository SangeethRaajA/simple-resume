import { useForm, useFieldArray } from "react-hook-form";
import FormWrapper from "../../../wrapper/FormWrapper";
import { Button, Stack, TextField, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import BuildIcon from "@mui/icons-material/Build";

type SkillData = {
  skills: string[];
  skillItem: {
    text: string;
  }[];
};

type SkillFormProps = SkillData & {
  updateFields: (fields: Partial<SkillData>) => void;
};

const SkillForm = ({ skills, skillItem, updateFields }: SkillFormProps) => {
  const form = useForm<SkillFormProps>({
    defaultValues: {
      skills: ["", ""],
      skillItem: [{ text: "" }],
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "skillItem",
    control,
  });

  return (
    <>
      <FormWrapper title="Skill" name={<BuildIcon />}>
        <Stack direction={"column"} spacing={2} margin={2}>
          <div>
            <Typography>List of Skills</Typography>
            <div>
              {fields.map((field, index) => {
                return (
                  <div className="form-control" key={field.id}>
                    <TextField
                      type="text"
                      // value={skills.join("\n")}
                      {...register(`skillItem.${index}.text` as const)}
                      onChange={(e) =>
                        updateFields({ skills: e.target.value.split("\n") })
                      }
                    />
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="contained"
                        onClick={() => remove(index)}
                        startIcon={<RemoveIcon />}
                        size="small"
                        color="error"
                      ></Button>
                    )}
                  </div>
                );
              })}
              <Button type="button" onClick={() => append({ text: "" })}>
                Add
              </Button>
            </div>
          </div>

          {/* <TextField
            placeholder="Add Skill"
            type="text"
            value={skills.join("\n")}
            // Update the first name on input change
            onChange={(e) =>
              updateFields({ skills: e.target.value.split("\n") })
            }
          /> */}
        </Stack>
      </FormWrapper>
    </>
  );
};

export default SkillForm;
