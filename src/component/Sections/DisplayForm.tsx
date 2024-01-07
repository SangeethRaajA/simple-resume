import { UseMultistepForm } from "../../Hooks/UseMultistepForm";
import { Box, Button, Grid, Paper } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ProfileForm from "../Form/ProfileForm";
import EducationForm from "../Form/EducationForm";
import { FormEvent, useState } from "react";
import AchievementForm from "../Form/AchievementForm";
import ObjectiveForm from "../Form/ObjectiveForm";
import WorkForm from "../Form/WorkForm";
import SkillForm from "../Form/SkillForm";
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
  skillItem: {
    text: string;
  }[];
  // extra: string;
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
  skillItem: [{ text: "" }],
  // extra: "",
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
        <Grid container spacing={2}>
          <Grid item xs={3} marginBottom={1} >
            <Item>ddd</Item>
            <Item>ddd</Item>
            <Item>ddd</Item>
            <Item>ddd</Item>
          </Grid>
          <Grid item xs={9}>
            <Item >
              <Box>
                <form onSubmit={handleSubmit} >
                  <Box sx={{ mx: "auto", width: "50%", height:"50%" }}>{step}</Box>
                  <Grid
                    marginTop={1}
                    justifyContent="flex-end"
                    gap={1}
                    display="flex"
                  >
                    {!isFirstStep && (
                      <Button
                        type="button"
                        variant="contained"
                        startIcon={<NavigateBeforeIcon />}
                        onClick={back}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      type="button"
                      variant="contained"
                      endIcon={<NavigateNextIcon />}
                      onClick={next}
                    >
                      {isLastStep ? "Finish" : "Next"}
                    </Button>
                  </Grid>
                </form>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>

      {/* <Box > */}

      {/* </Box> */}
    </>
  );
};

export default DisplayForm;
