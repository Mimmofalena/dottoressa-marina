import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import useStyles from "../Utils/Styles";
import { useTheme } from "@mui/styles";

const Domanda = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const [displayMore, setDisplayMore] = useState(false);

  const clickHandler = () => {
    setDisplayMore(!displayMore);
  };

  return (
    <Grid style={{ cursor: "pointer" }} item xs={12} container spacing={2}>
      <Grid onClick={clickHandler} item xs={12} container>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            backgroundColor: theme.palette.primary[200],
            "&:hover": {
              opacity: 0.5,
            },
          }}
        >
          <ArrowForward
            className={classes.icon}
            style={{
              backgroundColor: "white",
              height: "180px",
              marginRight: "1rem",
            }}
          />

          <Typography variant="h6" ml={1}>
            {props.title}
          </Typography>
        </Box>
      </Grid>

      <Grid sx={{ cursor: "default" }} p={2} item xs={12}>
        {displayMore && (
          <Typography align="justify" variant="body2">
            {props.answer}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Domanda;
