import React from "react";
import { Typography, CardContent, Card } from "@mui/material";
import useStyles from "../Utils/Styles";

const Curriculum = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} id="curriculum">
      <CardContent>
        <Typography gutterBottom variant="h4" align="center">
          Il mio curriculum
        </Typography>

        <Typography p={2} align="justify" variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          laborum ab quod cum similique aspernatur odit debitis non laudantium.
          Tenetur fuga facere expedita autem asperiores doloribus commodi, iure
          sapiente cum. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Debitis consectetur rerum mollitia perferendis, esse laborum
          vero? Mollitia enim explicabo et maiores dicta molestiae id fuga,
          ducimus dignissimos! Corrupti, quidem dolores.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Curriculum;
