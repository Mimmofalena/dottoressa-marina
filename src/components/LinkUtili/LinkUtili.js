import React from "react";
import { List, Typography, Box, Hidden } from "@mui/material";
import LinkUtiliItem from "./LinkUtiliItem";
import useStyles from "../Utils/Styles";

const LinkUtili = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" align="center">
        Link Utili
      </Typography>
      <Box p={1} mt={1}>
        {/* *********************************** SMALL SCREENS*********************************** */}
        <Hidden mdUp>
          <List className={classes.linkContainerSmall}>
            <LinkUtiliItem
              href="https://protezionecivile.comune.palermo.it/protezione-civile-covid19-faq.php"
              linkName="Protezione Civile Palermo"
            />
            <LinkUtiliItem
              href="https://www.salute.gov.it/portale/rapportiInternazionali/menuContenutoRapportiInternazionali.jsp?lingua=italiano&area=rapporti&menu=mondiale"
              linkName="Organizzazione Mondiale della Sanità"
            />
            <LinkUtiliItem
              href="https://www.salute.gov.it/portale/nuovocoronavirus/dettaglioFaqNuovoCoronavirus.jsp?lingua=italiano&id=235"
              linkName="Come proteggersi dal Covid"
            />
            <LinkUtiliItem
              href="https://sportello.asppalermo.org/release/index/cambioMedico"
              linkName="Cambio medico online Palermo"
            />
          </List>
        </Hidden>
        {/* *********************************** LARGESCREENS*********************************** */}
        <Hidden mdDown>
          <List className={classes.linkContainer}>
            <LinkUtiliItem
              href="https://protezionecivile.comune.palermo.it/protezione-civile-covid19-faq.php"
              linkName="Protezione Civile Palermo"
            />
            <LinkUtiliItem
              href="https://www.salute.gov.it/portale/rapportiInternazionali/menuContenutoRapportiInternazionali.jsp?lingua=italiano&area=rapporti&menu=mondiale"
              linkName="Organizzazione Mondiale della Sanità"
            />
            <LinkUtiliItem
              href="https://www.salute.gov.it/portale/nuovocoronavirus/dettaglioFaqNuovoCoronavirus.jsp?lingua=italiano&id=235"
              linkName="Come proteggersi dal Covid"
            />
            <LinkUtiliItem
              href="https://sportello.asppalermo.org/release/index/cambioMedico"
              linkName="Cambio medico online Palermo"
            />
          </List>
        </Hidden>
      </Box>
    </>
  );
};

export default LinkUtili;
