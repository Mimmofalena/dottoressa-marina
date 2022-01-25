import React, { useState } from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ServiziOffertiDetail from "./ServiziOffertiDetail";
import useStyles from "../Utils/Styles";

const Servizio = (props) => {
  const classes = useStyles();
  const [displayMore, setDisplayMore] = useState(false);

  const clickHandler = () => {
    setDisplayMore(!displayMore);
  };

  return (
    // <Grid
    //   onClick={clickHandler}
    //   style={{ cursor: "pointer" }}
    //   item
    //   xs={12}
    //   container
    //   display="flex"
    //   alignItems="center"
    //   justifyContent="flex-start"
    //   spacing={2}
    // >
    //   <Grid
    //     container
    //     item
    //     xs={6}
    //     alignItems="center"
    //     justifyContent="flex-start"
    //     spacing={2}
    //   >
    //     <Grid item xs={3}>
    //       {props.icon}
    //     </Grid>

    //     <Grid item xs={3}>
    //       <Typography variant={"h6"}>{props.typography}</Typography>
    //     </Grid>
    //   </Grid>

    //   <Grid container item xs={6}>
    //     <Grid item xs={6}></Grid>
    //     <Grid item xs={6}>
    //       <IconButton size="large">
    //         <ArrowDropDown />
    //       </IconButton>
    //     </Grid>
    //   </Grid>

    //   <Grid item xs={12}>
    //     {displayMore && <ServiziOffertiDetail />}
    //   </Grid>
    // </Grid>

    <Box>
      <Grid
        spacing={2}
        container
        display="flex"
        flexWrap="wrap"
        alignItems="cente"
        justifyContent="start"
        ml={2}
      >
        <Grid item>{props.icon}</Grid>
        <Grid item>
          <Typography variant={"h6"}>{props.typography}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Servizio;
