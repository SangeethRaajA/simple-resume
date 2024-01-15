import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { FormEvent, useState } from "react";
import ObjectiveForm from "../molecules/Form/ObjectiveForm";
import { styled } from "@mui/material/styles";
import UseMultistepFormResume from "../../hooks/UseMultistepFormResume";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkFormNew from "../molecules/Form/WorkFormNew";
import ProfileForm from "../molecules/Form/ProfileForm";
import EducationFormNew from "../molecules/Form/EducationFormNew";
import SkillFormNew from "../molecules/Form/SkillFormNew";
import AchivementFormNew from "../molecules/Form/AchivementFormNew";
import { useNavigate } from "react-router-dom";

type WorkData = {
  // id: number;
  wname: string;
  role: string;
  sdate: Date;
  edate: Date;
  wdesc: string;
};

type EduData = {
  // id: number;
  ename: string;
  estudy: string;
  sdate: Date;
  edate: Date;
  edesc: string;
};

type FormData = {
  firstname: string;
  lastname: string;
  title: string;
  street: string;
  city: string;
  state: string;
  phone: string;
  website: string;
  mail: string;
  objective: string;
  work: WorkData[];
  edu: EduData[];
  achievements: string[];
  skills: string[];
};

const INITIAL_DATA: FormData = {
  firstname: "",
  lastname: "",
  title: "",
  street: "",
  city: "",
  state: "",
  phone: "",
  website: "",
  mail: "",
  objective: "",
  work: [
    {
      // id: 1,
      wname: "",
      role: "",
      sdate: new Date(),
      edate: new Date(),
      wdesc: "",
    },
  ],
  edu: [
    {
      // id: 1,
      ename: "",
      estudy: "",
      sdate: new Date(),
      edate: new Date(),
      edesc: "",
    },
  ],
  achievements: [],
  skills: [],
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
}));

const DisplayForm = () => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { step, isFirstStep, isLastStep, back, next } = UseMultistepFormResume([
    <ProfileForm {...data} updateFields={updateFields} />,
    <ObjectiveForm {...data} updateFields={updateFields} />,
    <SkillFormNew {...data} updateFields={updateFields} />,
    <WorkFormNew {...data} updateFields={updateFields} />,
    <EducationFormNew {...data} updateFields={updateFields} />,
    <AchivementFormNew {...data} updateFields={updateFields} />,
  ]);

  //navigate page from list
  let navigate = useNavigate();

  //fetch resume save
  const fetchData = async (formData: FormData) => {
    try {
      const response = await fetch(
        "https://simple-resume-backend.onrender.com/api/v1/resume/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const errorMsg = `Error occurred: ${
          responseData.error || response.status
        }`;
        throw new Error(errorMsg);
      }

      // Handle the response data if needed
      console.log(responseData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }
  const handleClick = () => {
    fetchData(data);
    console.log(data);
    navigate(``);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid display="flex" justifyContent="left" alignItems="left" margin={2}>
          <Typography variant="h4">Create Resume</Typography>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={3}
            spacing={2}
            display="flex"
            justifyContent="left"
            alignItems="left"
            margin={2}
          >
            <Grid margin={1}>
              {!isFirstStep && (
                <Button
                  type="button"
                  variant="contained"
                  startIcon={<NavigateBeforeIcon />}
                  onClick={back}
                  size="large"
                  color="primary"
                >
                  Back
                </Button>
              )}
              {isLastStep ? (
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<CheckCircleOutlineIcon />}
                  onClick={handleClick}
                  size="large"
                  color="success"
                >
                  Finish
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="contained"
                  endIcon={<NavigateNextIcon />}
                  onClick={next}
                  size="large"
                  color="primary"
                >
                  Next
                </Button>
              )}
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Box>
                <form onSubmit={handleSubmit}>
                  <Box>{step}</Box>
                </form>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DisplayForm;
