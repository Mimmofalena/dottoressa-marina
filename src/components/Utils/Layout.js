import React from "react";
import { Box } from "@mui/material";
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

import CssBaseline from "@mui/material/CssBaseline";
import SubHeadingSection from "../SubHeadingSection/SubHeadingSection";
import LinkUtili from "../LinkUtili/LinkUtili";

const Layout = () => {
  const classes = useStyles();
  return (
    <Box>
      <CssBaseline />

      <Header />
      <Box className={classes.toolbar}></Box>
      <SubHeadingSection />

      <Switch>
        <Route exact path="/">
          <ServiziOfferti />

          <Curriculum />

          <DomandeFrequenti />

          <Contacts />

          <ScrollToTop />

          <Maps />

          <LinkUtili />
        </Route>
      </Switch>
      <Footer />
    </Box>
  );
};

export default Layout;
