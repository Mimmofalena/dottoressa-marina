import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Servizio = (props) => {
  return (
    <Box minWidth={300}>
      <Grid
        // spacing={2}
        container
        alignItems="center"
        // justifyContent="center"
        // alignContent="center"
        // ml={2}
      >
        {/* <Grid item>{props.icon}</Grid> */}
        <Grid
          item
          style={{
            height: "24px",
            width: "24px",
            background: "linear-gradient(45deg, #fff, #26a69a)",
            borderRadius: "50%",
            // position: "relative",
          }}
        >
          <Typography
            fontWeight={600}
            style={{
              display: "grid",
              placeItems: "center",

              // display: "flex",
              // justifyContent: "center",
              // position: "absolute",
              // right: "0",
              // left: "0",
              // right: "0",
              // bottom: "0",
            }}
          >
            <span>{props.index}</span>
          </Typography>
        </Grid>

        <Grid pl={1} item>
          <Typography textAlign="left" variant={"h6"}>
            {props.typography}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Servizio;
