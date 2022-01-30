import React from "react";
import {
  Typography,
  CardContent,
  Card,
  Box,
  Icon,
  SvgIcon,
  Grid,
} from "@mui/material";
import curriculumSVG from "../../assets/curriculum.svg";
import useStyles from "../Utils/Styles";

const Curriculum = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} id="curriculum">
      <CardContent>
        <Typography gutterBottom variant="h4" align="center">
          Curriculum
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box p={2} sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ width: "50vw" }}
                src={curriculumSVG}
                alt="uomo che guarda il curriculum"
              ></img>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography p={2} align="justify" variant="subtitle1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate laborum ab quod cum similique aspernatur odit debitis
              non laudantium. Tenetur fuga facere expedita autem asperiores
              doloribus commodi, iure sapiente cum. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Debitis consectetur rerum mollitia
              perferendis, esse laborum vero? Mollitia enim explicabo et maiores
              dicta molestiae id fuga, ducimus dignissimos! Corrupti, quidem
              dolores.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Curriculum;
