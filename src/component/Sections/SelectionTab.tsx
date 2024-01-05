import { Tabs, TabList, Tab, Box, TabPanel } from "@mui/joy";
import ProfileInput from "../Forms/ProfileInput";
import SkillInput from "../Forms/SkillInput";
import ObjectiveInput from "../Forms/ObjectiveInput";
import WorkInuput from "../Forms/WorkInuput";
import EducationInput from "../Forms/EducationInput";
import AchievementInput from "../Forms/AchievementInput";
import ExtraInput from "../Forms/ExtraInput";

let items = [
  "Profile",
  "Objective",
  "Work Experience",
  "Education",
  "Achievements",
  "Skills",
  "Extra",
];

const SelectionTab = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs aria-label="Scrollable tabs" defaultValue={0} sx={{ width: 400 }}>
          <TabList
            sx={{
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "auto" },
            }}
          >
            {items.map((item, index) => (
              <Tab key={index} sx={{ flex: "none", scrollSnapAlign: "start" }}>
                {item}
              </Tab>
            ))}
          </TabList>

          <TabPanel value={0}>
            <ProfileInput />
          </TabPanel>

          <TabPanel value={1}>
            <ObjectiveInput />
          </TabPanel>

          <TabPanel value={2}>
            <WorkInuput />
          </TabPanel>

          <TabPanel value={3}>
            <EducationInput />
          </TabPanel>

          <TabPanel value={4}>
            <AchievementInput />
          </TabPanel>

          <TabPanel value={5}>
            <SkillInput />
          </TabPanel>

          <TabPanel value={6}>
            <ExtraInput />
          </TabPanel>
        </Tabs>
      </Box>
    </>
  );
};

export default SelectionTab;
