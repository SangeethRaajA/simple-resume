import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import { ISkill } from "../../interfaces/skill.interface";

const SkillInput = () => {
  const [inputList, setInputList] = useState<ISkill>({
    skill: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputList({
      ...inputList,
      [name]: value,
    });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          margin: "1%",
          border: "2px solid #ccc",
        }}
      >
        <Stack direction={"column"} spacing={2} margin={2}>
        <Typography>Skill </Typography>
          <TextField
            placeholder="Skill"
            onChange={handleChange}
          />
          <AddButton/>
        </Stack>
      </Box>
    </>
  );
};

export default SkillInput;
