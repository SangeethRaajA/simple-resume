import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import { IExtra } from "../../interfaces/extra.interface";

const ExtraInput = () => {
  const [inputList, setInputList] = useState<IExtra>({
    extra: ""
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
        <Typography>Extracurricular / Hobby</Typography>
          <TextField
            placeholder="Extracurricular/Hobby"
            onChange={handleChange}
          />
          <AddButton/>
        </Stack>
      </Box>
    </>
  );
};

export default ExtraInput;