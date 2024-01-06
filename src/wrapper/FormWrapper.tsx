import { Card, Typography } from "@mui/material";
import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <Card variant="elevation" style={{backgroundColor: "grey"}}>
        <Typography variant="h5" color="white" margin={2}>
          {title}
        </Typography>
      </Card>

      <div>{children}</div>
    </>
  );
};

export default FormWrapper;
