import React from "react";
import Footer from "../Footer/Footer";
import Contacts from "../Contacts/Contacts";
import Curriculum from "../Curriculum/Curriculum";
import ServiziOfferti from "../ServiziOfferti/ServiziOfferti";
import ScrollToTop from "./ScrollToTop";
import Maps from "../Map/Maps";
import DomandeFrequenti from "../DomandeFrequenti/DomandeFrequenti";
import Header from "../Header/Header";
import LinkUtili from "../LinkUtili/LinkUtili";
import useStyles from "./Styles";
import { Switch, Route } from "react-router";
import { Box } from "@mui/material";
import SubHeadingSection from "../SubHeadingSection/SubHeadingSection";
import CssBaseline from "@mui/material/CssBaseline";
import OrariStudio from "../Contacts/OrariStudio";

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

          <OrariStudio />

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
