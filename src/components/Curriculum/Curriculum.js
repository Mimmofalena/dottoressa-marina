import React from "react";
import { Typography, CardContent, Card, Box, Grid } from "@mui/material";
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
            <Typography p={2} align="justify" gutterBottom>
              Laureata all'Università di Palermo a pieni voti nel 2013. Titolare
              di medico di guardia. Pratico agopuntura come adiuvante alle
              terapie mediche tradizionali quando necessario. Ho conseguito un
              master di nutrizione di secondo livello a pieni voti presso
              l'Università di Napoli.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Curriculum;
