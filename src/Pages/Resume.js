import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Education from "../Components/AllResume/Education/Education";
import Experience from "../Components/AllResume/Experience/Experience";
import Interview from "../Components/AllResume/Interview/Interview";
import Skill from "../Components/AllResume/Skills/Skills";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Resume = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="md:py-20 py-5">
      <h2 className="text-lg md:text-center text-start text-[#FF014F] uppercase">
        1.5+ year experience
      </h2>
      <h2 className="md:text-6xl text-4xl md:text-center text-start text-gray-300 font-medium capitalize pt-3 md:pb-12 pb-5">
        my resume
      </h2>
      <Box sx={{ "& .MuiBox-root": { padding: 0, paddingTop: 2 } }}>
        <Tabs
          sx={{
            backgroundColor: "#212428",
            boxShadow: "0px 0px 20px 5px #2f3032",
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
              display: "flex",
            },
            "& button": {
              padding: 4,
              color: "#fff",
              fontWeight: 700,
            },
            "& button.Mui-selected": {
              backgroundColor: "#1F2125",
              color: "#FF014F",
            },
          }}
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ hidden: true }}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Education" {...a11yProps(0)} />
          <Tab label="Professional Skills" {...a11yProps(1)} />
          <Tab label="Experience" {...a11yProps(2)} />
          <Tab label="Interview" {...a11yProps(3)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Education />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Skill />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Experience />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Interview />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Resume;
