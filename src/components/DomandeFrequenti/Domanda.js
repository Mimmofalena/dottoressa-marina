import React, { useState } from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
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
            borderRadius: "5px",
            width: "100%",
            alignItems: "center",
            backgroundColor: theme.palette.primary[100],
            "&:hover": {
              opacity: 0.5,
            },
          }}
        >
          <Box p={1}>
            <ArrowForward className={classes.icon} />
          </Box>

          <Typography variant="h6" ml={1}>
            {props.title}
          </Typography>
        </Box>
      </Grid>

      <Grid sx={{ cursor: "default" }} p={2} item xs={12}>
        {displayMore && (
          <Box>
            <Typography
              p={1}
              align="justify"
              style={{ whiteSpace: "pre-line" }}
            >
              {props.answer}
            </Typography>
            <Box display="flex" justifyContent="center" p={1}>
              <img src={props.src} alt={props.alt} />
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Domanda;
