import { IconButton, Typography } from "@mui/material";
import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  name: any;
  children: ReactNode;
};

const FormWrapper = ({ title, name, children }: FormWrapperProps) => {
  return (
    <>
      <Typography variant="h4">
        <IconButton size="large" edge="end" color="inherit" aria-label="logo">
          {name}
        </IconButton>{" "}
        {title}
      </Typography>

      <hr />
      <div>{children}</div>
    </>
  );
};

export default FormWrapper;
