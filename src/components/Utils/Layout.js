import React from "react";
import { motion } from "framer-motion/dist/es/index";
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
// import MarinaPic from "../../assets/marina-studio-medico.jpeg";
import doctorPicture from "../../assets/Doctor.svg";
import CssBaseline from "@mui/material/CssBaseline";

const Layout = () => {
  const classes = useStyles();
  return (
    <Box>
      <CssBaseline />

      <Header />
      <Box className={classes.toolbar}></Box>

      <Card className={classes.card}>
        <Grid container spacing={2} justifySelf="center">
          <Grid item md={6}>
            <motion.div
              initial={{ opacity: 0, translateX: "-100%" }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5 }}
            >
              {/* <img src={MarinaPic} alt="" /> */}
              <CardMedia
                alt="dottoressa sorridente parla al telefono"
                component="img"
                src={doctorPicture}
              ></CardMedia>
            </motion.div>
          </Grid>
          <Grid item md={6}>
            <CardContent>
              <Box mt={4} p={2}>
                <Typography variant="h4" textAlign="center" gutterBottom={true}>
                  Dott.ssa Marina Tricoli
                </Typography>
                <Typography variant="h5" textAlign="center" gutterBottom={true}>
                  Medico di medicina generale
                </Typography>
                <Typography gutterBottom={true}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  optio voluptas dignissimos, enim quae nulla quasi ea saepe.
                  Beatae aspernatur exercitationem a libero consequatur saepe
                  non totam atque facilis deserunt.
                </Typography>
              </Box>
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
