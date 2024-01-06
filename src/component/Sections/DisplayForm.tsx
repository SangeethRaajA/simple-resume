import { UseMultistepForm } from "../../Hooks/UseMultistepForm";
import { Box, Button, Grid } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ProfileForm from "../Form/ProfileForm";
import EducationForm from "../Form/EducationForm";
import { FormEvent, useState } from "react";
import AchievementForm from "../Form/AchievementForm";
import ObjectiveForm from "../Form/ObjectiveForm";
import WorkForm from "../Form/WorkForm";
import SkillForm from "../Form/SkillForm";

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
  // extra: "",
};

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
      <Box sx={{ width: "100%" }} >
        <form onSubmit={handleSubmit} >
          <div style={{ position: "revert-layer", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1}/{steps.length}
          </div>
          <Box
            sx={{
              margin: "1%",
              border: "2px solid #454",
            }}
            
          >
            {step}
          </Box>
          <Grid marginTop={1} justifyContent="flex-end" gap={1} display="flex">
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
    </>
  );
};

export default DisplayForm;
