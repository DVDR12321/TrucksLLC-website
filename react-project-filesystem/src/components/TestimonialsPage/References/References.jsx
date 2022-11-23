import React from "react";
import SimpleContainer from "./SimpleContainer";
import Carousel from "../Carousel/Carousel";
import { StyledGrid } from "./StyledComponents";

const References = () => {
  return (
    <StyledGrid>
      <SimpleContainer
        Header="Our references"
        Body={<Carousel></Carousel>}
      ></SimpleContainer>
    </StyledGrid>
  );
};
export default References;