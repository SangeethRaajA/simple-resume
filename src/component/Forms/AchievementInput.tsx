import { Box, Stack, TextField, Typography } from "@mui/material";
import AddButton from "../Buttons/AddButton";
import { useState } from "react";
import { IAchivement } from "../../interfaces/achivement.interface";

const AchievementInput = () => {
  const [inputList, setInputList] = useState<IAchivement>({
    achivement: [],
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
          <Typography>Achievement </Typography>
          <TextField
            placeholder="Describe your achivement in a paragraph."
            multiline
            rows={2}
            maxRows={4}
            onChange={handleChange}
          />

          <AddButton />
        </Stack>
      </Box>
    </>
  );
};

export default AchievementInput;
