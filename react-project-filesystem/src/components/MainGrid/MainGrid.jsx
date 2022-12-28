import * as React from "react";
import Grid from "@mui/material/Grid";
import MainScreen from "../MainScreen/MainScreen";
import VideoPlayer from "../VideoScreen/VideoPlayer";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import { Testimonials } from "../TestimonialsPage/Testimonials";

import {
  StyledAboutGrid,
  StyledBox,
  StyledTestimonialsGrid,
  StyledVideoGrid,
} from "./StyledComponents";
import BackToTop from "../BackToTop/BackToTop";
import { useState } from "react";

const MainGrid = () => {
  const [BackToTopButton, setBackToTopButton] = useState("");
  return (
    <StyledBox sx={{ flexGrow: 2 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sx={{ height: "100%" }}>
          <MainScreen></MainScreen>
        </Grid>
        <StyledAboutGrid item xs={12} sx={{ paddingTop: "10vmin" }}>
          <AboutUsSection></AboutUsSection>
        </StyledAboutGrid>
        <StyledVideoGrid item xs={12}>
          <VideoPlayer></VideoPlayer>
        </StyledVideoGrid>
        <StyledTestimonialsGrid item xs={12}>
          <Testimonials></Testimonials>
        </StyledTestimonialsGrid>
        <Grid item xs={12}>
          <div style={{ textAlign: "center" }}>
            <h1>? $ Payments $ ?</h1>
            <h1> Find us </h1>
          </div>
        </Grid>
      </Grid>
      <BackToTop
        BackToTopButton={BackToTopButton}
        setBackToTopButton={setBackToTopButton}
      ></BackToTop>
    </StyledBox>
  );
};

export default MainGrid;
