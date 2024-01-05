import { Box, Stack, TextField, Typography } from "@mui/material";
import AddButton from "../Buttons/AddButton";
import { IObjective } from "../../interfaces/objective.interface";
import { useState } from "react";

const ObjectiveInput = () => {
  const [inputList, setInputList] = useState<IObjective>({
    objective: "",
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
          <Typography>Objective / Goal</Typography>
          <TextField
            placeholder="Describe your objective in a paragraph."
            multiline
            rows={2}
            maxRows={5}
            onChange={handleChange}
          />

          <AddButton />
        </Stack>
      </Box>
    </>
  );
};

export default ObjectiveInput;
