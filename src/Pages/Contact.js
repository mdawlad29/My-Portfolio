import React from "react";
import contactImg from "../images/contact1.png";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiFiverr } from "react-icons/si";
import { Box } from "@mui/system";
import { Grid, TextareaAutosize, TextField } from "@mui/material";

const Contact = () => {
  return (
    <div className="md:py-20 py-5">
      {/* --title-- */}
      <h2 className="text-lg md:text-center text-start text-[#FF014F] uppercase">
        contact
      </h2>
      <h2 className="md:text-6xl text-4xl md:text-center text-start text-gray-300 font-medium capitalize pt-3 md:pb-12 pb-5">
        contact with me
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 md:gap-6 gap-3">
        {/* --leftInfo-- */}
        <div className="lg:col-span-1 col-span-1 bg-white shadow-xl md:px-8 px-4 py-5 rounded-lg md:space-y-5 space-y-2">
          <img
            className="w-full object-cover rounded-lg"
            src={contactImg}
            alt=""
          />
          <h2 className="md:text-2xl font-bold uppercase">mohammad awlad</h2>
          <h2 className="md:text-xl text-gray-500 font-semibold capitalize">
            frontend developer with react.Js
          </h2>
          <h2 className="md:text-lg text-gray-500">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </h2>
          <div>
            <div className="flex gap-4 items-center">
              <h2 className="uppercase text-base font-bold text-gray-700">
                phone
              </h2>
              <h2 className="text-base font-bold text-gray-700">:</h2>
              <h2 className="text-base font-semibold text-gray-700">
                01725385909
              </h2>
            </div>
            <div className="flex gap-4">
              <h2 className="uppercase text-base font-bold text-gray-700">
                Email
              </h2>
              <h2 className="text-base font-bold text-gray-700 pl-2">:</h2>
              <h2 className="text-base font-semibold text-gray-700">
                mdawladbdinfo@gmail.com
              </h2>
            </div>
          </div>
          <div>
            <h2 className="md:text-xl text-gray-500 font-semibold capitalize py-2">
              contact us
            </h2>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/awlads" target="_blank">
                <IoLogoFacebook className="w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white" />
              </a>
              <a href="https://www.linkedin.com/in/mdawlad/" target="_blank">
                <FaLinkedin className="w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white" />
              </a>
              <a href="https://github.com/Md-Awlad" target="_blank">
                <ImGithub className="w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white" />
              </a>
              <a href="https://www.fiverr.com/mdawlad909" target="_blank">
                <SiFiverr className="w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white" />
              </a>
            </div>
          </div>
        </div>
        {/* --rightForm-- */}
        <div className="lg:col-span-2 col-span-1 bg-white shadow-xl md:px-8 px-4 py-5 rounded-lg">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="YOUR NAME"
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="PHONE NUMBER"
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="YOUR EMAIL"
                variant="outlined"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="SUBJECT"
                variant="outlined"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={10}
              placeholder="Minimum 3 rows"
              style={{ width: "100%" }}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Contact;
