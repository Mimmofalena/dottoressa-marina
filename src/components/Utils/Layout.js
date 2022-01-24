import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Grid,
} from "@mui/material";
import DomandeFrequenti from "../DomandeFrequenti/DomandeFrequenti";
import Footer from "../Footer/Footer";
import Contacts from "../Contacts/Contacts";
import Curriculum from "../Curriculum/Curriculum";
import Header from "../Header/Header";
import useStyles from "./Styles";
import { Switch, Route } from "react-router";
import ServiziOfferti from "../ServiziOfferti/ServiziOfferti";
import ScrollToTop from "./ScrollToTop";
import Maps from "../Map/Maps";
import MarinaPic from "../../assets/marina-studio-medico.jpeg";
import CssBaseline from "@mui/material/CssBaseline";

const Layout = () => {
  const classes = useStyles();
  return (
    <Box>
      <CssBaseline />

      <Header />
      <Box className={classes.toolbar}></Box>
      <Card raised className={classes.imageContainer}>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <CardMedia
              alt="dottoressa sorridente parla al telefono"
              component="img"
              src={MarinaPic}
            ></CardMedia>
          </Grid>
          <Grid item md={4}>
            <CardContent>
              <Typography variant="h4" textAlign="center" gutterBottom={true}>
                Dott.ssa Marina Tricoli
              </Typography>
              <Typography variant="h5" textAlign="center" gutterBottom={true}>
                Medico di medicina generale
              </Typography>
              <Typography gutterBottom={true}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                optio voluptas dignissimos, enim quae nulla quasi ea saepe.
                Beatae aspernatur exercitationem a libero consequatur saepe non
                totam atque facilis deserunt.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <Switch>
        <Route exact path="/">
          <ServiziOfferti />

          <Curriculum />

          <DomandeFrequenti />

          <Contacts />

          <ScrollToTop />

          <Maps />
        </Route>
      </Switch>
      <Footer />
    </Box>
  );
};

export default Layout;
