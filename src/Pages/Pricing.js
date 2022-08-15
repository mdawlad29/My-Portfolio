import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Basic from "../Components/AllPricing/BasicPricing/Basic";
import Standard from "../Components/AllPricing/StandardPricing/Standard";
import Premium from "../Components/AllPricing/PremiumPricing/Premium";

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

const Pricing = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="md:py-20 py-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
        {/* --left-- */}
        <div className="shadow-2xl md:px-8 px-4">
          <h2 className="text-lg text-[#BB1916] uppercase">pricing</h2>
          <h2 className="md:text-6xl text-4xl text-gray-300 font-medium capitalize pt-3 md:pb-12 pb-5">
            my pricing
          </h2>
        </div>
        {/* --right-- */}
        <div className="shadow-2xl rounded-bl-lg">
          <Box
            sx={{
              zIndex: 0,
              position: "static",
              "& .MuiBox-root": { padding: 0 },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                hidden: true,
              }}
              sx={{
                margin: "auto",
                "& .MuiTabs-flexContainer": {
                  overflowX: "scroll",
                },
                "& button": {
                  paddingLeft: 8.4,
                  paddingRight: 8.4,
                  borderRadius: "10px 10px 0 0 ",
                  color: "#fff",
                  fontSize: 16,
                },
                "& button.Mui-selected": {
                  backgroundColor: "#BB1619",
                  color: "#fff",
                },
              }}
            >
              <Tab label="Basic" {...a11yProps(0)} />
              <Tab label="Standard" {...a11yProps(1)} />
              <Tab label="Premium" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Basic />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Standard />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Premium />
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
