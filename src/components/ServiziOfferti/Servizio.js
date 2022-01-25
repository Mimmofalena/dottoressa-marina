import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Servizio = (props) => {
  return (
    <Box width={300}>
      <Grid spacing={2} container alignItems="center" ml={2}>
        <Grid item>{props.icon}</Grid>
        <Grid item>
          <Typography variant={"h6"}>{props.typography}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Servizio;
