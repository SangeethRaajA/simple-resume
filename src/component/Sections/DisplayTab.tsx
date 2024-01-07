import Box from "@mui/material/Box";
import Resume from "./Resume";
import Dragger from "../Surface/Dragger";

const DisplayTab = () => {

  return (
    <>
      <Box sx={{ mx: 'auto', width: "90%" }}>
        <Resume/>
        <Dragger/>
      </Box>
    </>
  );
};

export default DisplayTab;
