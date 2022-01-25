import React from "react";
import { Typography, Box, CardContent, Card, Container } from "@mui/material";
import useStyles from "../Utils/Styles";

const Curriculum = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} id="curriculum" variant="outlined">
      <CardContent sx={{ padding: 2 }}>
        <Container>
          <Typography gutterBottom variant="h4" align="center">
            Il mio curriculum
          </Typography>

          <Typography align="justify" variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            laborum ab quod cum similique aspernatur odit debitis non
            laudantium. Tenetur fuga facere expedita autem asperiores doloribus
            commodi, iure sapiente cum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Debitis consectetur rerum mollitia perferendis,
            esse laborum vero? Mollitia enim explicabo et maiores dicta
            molestiae id fuga, ducimus dignissimos! Corrupti, quidem dolores.
          </Typography>
        </Container>
      </CardContent>
    </Card>
  );
};

export default Curriculum;
