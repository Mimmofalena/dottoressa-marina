import React from "react";
import { List, Typography, Box, Hidden } from "@mui/material";
import LinkUtiliItem from "./LinkUtiliItem";
import useStyles from "../Utils/Styles";
import linkUtiliList from "./LinkUtiliList";
import { v4 as uuidv4 } from "uuid";

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
            {linkUtiliList.map((item) => {
              return (
                <LinkUtiliItem
                  key={uuidv4()}
                  href={item.href}
                  linkName={item.linkName}
                  download={item.download}
                />
              );
            })}
            {/* <LinkUtiliItem
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
            <LinkUtiliItem
              href={isolamentoFlowChart}
              linkName="Scarica Guida isolamento COVID-19"
              download
            /> */}
          </List>
        </Hidden>
        {/* *********************************** LARGESCREENS*********************************** */}
        <Hidden mdDown>
          <List className={classes.linkContainer}>
            {linkUtiliList.map((item) => {
              return (
                <LinkUtiliItem
                  key={Math.random()}
                  href={item.href}
                  linkName={item.linkName}
                  download={item.download}
                />
              );
            })}
            {/* <LinkUtiliItem
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
            <LinkUtiliItem
              href={isolamentoFlowChart}
              linkName="Scarica Guida isolamento COVID-19"
              download
            /> */}
          </List>
        </Hidden>
      </Box>
    </>
  );
};

export default LinkUtili;
