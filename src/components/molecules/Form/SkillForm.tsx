import { useForm, useFieldArray } from "react-hook-form";
import FormWrapper from "../../../wrapper/FormWrapper";
import {
  Button,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import BuildIcon from "@mui/icons-material/Build";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEvent, useEffect, useState } from "react";

type SkillData = {
  skills: string[];
};

type SkillFormProps = SkillData & {
  updateFields: (fields: Partial<SkillData>) => void;
};

const SkillForm = ({ skills, updateFields }: SkillFormProps) => {
  const form = useForm<SkillFormProps>({
    defaultValues: {
      skills: ["", ""],
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const [data, setData] = useState([{ skill: "" }]);

  const handleClick = () => {
    setData([...data, { skill: "" }]);
  };

  const handleChange = (e: any | string, i: any | number) => {
    const [name, value] = e.target;
    const onchangeVal = [...data];
    // onchangeVal[i][name] = value;
    setData(onchangeVal);
  };

  const handleDelete = (i: any) => {
    const deleteVal = [...data];
    deleteVal.slice(i, 1);
    setData(deleteVal);
  };

  return (
    <>
      <FormWrapper title="Skill" name={<BuildIcon />}>
        <Stack direction={"column"} spacing={2} margin={2}>
          <Stack spacing={2} margin={2}>
            {data.map((val, i) => (
              <div className="div">
                <Input
                  type="text"
                  name="skill"
                  value={val.skill}
                  onChange={(e) => handleChange(e, i)}
                />
                <Button
                  onClick={() => handleDelete(i)}
                  variant="outlined"
                  color="error"
                  startIcon={<RemoveIcon />}
                >
                  Delete
                </Button>
              </div>
            ))}
          </Stack>
          <Grid container marginBottom={2} marginLeft={2} display="flex">
            <Button
              type="button"
              variant="contained"
              startIcon={<AddIcon />}
              size="large"
              color="success"
              onClick={handleClick}
            >
              Add
            </Button>
          </Grid>
        </Stack>
      </FormWrapper>
    </>
  );
};

export default SkillForm;
