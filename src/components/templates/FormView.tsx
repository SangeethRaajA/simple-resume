import UseMultistepForm from "../../hooks/UseMultistepForm";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ProfileForm from "../molecules/Form/ProfileForm";
import EducationForm from "../molecules/Form/EducationForm";
import { FormEvent, useState } from "react";
import AchievementForm from "../molecules/Form/AchievementForm";
import ObjectiveForm from "../molecules/Form/ObjectiveForm";
import WorkForm from "../molecules/Form/WorkForm";
import SkillForm from "../molecules/Form/SkillForm";
import { styled } from "@mui/material/styles";

type WorkData = {
  wname: string;
  role: string;
  sdate: Date;
  edate: Date;
  wdesc: string;
};

type EduData = {
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
  work: WorkData;
  edu: EduData;
  achievement: string[];
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
  work: {
    wname: "",
    role: "",
    sdate: new Date(),
    edate: new Date(),
    wdesc: "",
  },
  edu: {
    ename: "",
    estudy: "",
    sdate: new Date(),
    edate: new Date(),
    edesc: "",
  },
  achievement: [],
  skills: [],
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "ButtonShadow",
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

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    UseMultistepForm([
      <ProfileForm {...data} updateFields={updateFields} />,
      <ObjectiveForm {...data} updateFields={updateFields} />,
      <WorkForm {...data} updateFields={updateFields} />,
      <EducationForm {...data} updateFields={updateFields} />,
      <AchievementForm {...data} updateFields={updateFields} />,
      <SkillForm {...data} updateFields={updateFields} />,
    ]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

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
              <Button
                type="button"
                variant="contained"
                endIcon={<NavigateNextIcon />}
                onClick={next}
                size="large"
                color="primary"
              >
                {isLastStep ? "Finish" : "Next"}
              </Button>
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
