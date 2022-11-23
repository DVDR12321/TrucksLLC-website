import * as React from "react";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { StyledCard } from "./StyledComponents";

const BrokerCard = (props) => {
  const { imagep, headerp } = props;
  return (
    <StyledCard className="root">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagep}
          alt=""
          sx={{ objectFit: "contain" }}
        />
        <CardContent sx={{ padding: "5px" }}>
          <Typography
            gutterBottom
            color="white"
            component="div"
            sx={{ textAlign: "center", fontSize: "5vb" }}
          >
            {headerp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};
export default BrokerCard;
