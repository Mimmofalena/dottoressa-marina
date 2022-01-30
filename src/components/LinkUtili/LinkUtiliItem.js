import React from "react";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
import useStyles from "../Utils/Styles";

const LinkUtiliItem = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <ListItem className={classes.linkItem}>
        <Link
          sx={{ fontSize: "1.4em" }}
          underline="none"
          color="inherit"
          href={props.href}
        >
          <Typography align="center" variant="h5">
            {props.linkName}
          </Typography>
        </Link>
      </ListItem>
    </Box>
  );
};

export default LinkUtiliItem;
