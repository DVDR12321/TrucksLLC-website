import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../assets/main_background_colored_cropped.png";

// Grids ------------------------------------------------------------------
export const StyledGrid = styled(Grid)`
  height: 100vh;
  background-image: url(${img});
  background-size: 100% 100%;
  justify-content: center;
`;

export const StyledButtonGrid = styled(Grid)`
  display: flex;
  align-items: end;
  font-family: "Roboto", sans-serif;
  padding-bottom: 20vh;
  padding-left: 10vw;
  height: 70vh;
`;

export const StyledHeaderGrid = styled(Grid)`
  display: flex;
  align-items: end;
  font-family: "Roboto", sans-serif;
  padding-bottom: 20vh;
  padding-left: 10vw;
  height: 70vh;
`;

export const StyledCardsGrid = styled(Grid)`
  padding: 20px;
  backdrop-filter: blur(7px) sepia(20%);
  height: 30vh;
  width: 80%;
  justify-content: center;
  align-items: end;
  margin: 0%;
`;

// Items --------------------------------------------------------------------------------------------------------------------------------------------------

export const StyledMainTitle = styled("h1")`
  border-bottom: 4px outset red;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 12vmin;
  color: white;
`;
export const StyledButton = styled(Button)`
  font-weight: bold;
  font-size: 6vmin;
  height: 7vmin;
  width: 20vmax;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
