import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import NoteIcon from "@mui/icons-material/Note";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SyringeIcon from "../../assets/syringe-icon.svg";
import React from "react";
import Servizio from "./Servizio";
import useStyles from "../Utils/Styles";
import { useTheme } from "@mui/styles";
import serviziList from "./ServiziList";

const ServiziOfferti = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card
      style={{ backgroundColor: theme.palette.tertiary }}
      className={classes.card}
      id="servizi-offerti"
    >
      <CardContent>
        <Grid
          p={2}
          container
          display="flex"
          align="center"
          justifyContent="center"
          spacing={5}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h4"
              color="initial"
              align="center"
              gutterBottom
            >
              Servizi Offerti
            </Typography>
            <Typography gutterBottom>
              Di seguito sono riportati i servizi piu' comuni che offro ai miei
              assistiti.
            </Typography>
          </Grid>

          <Grid p={2} item xs={12} sm={6}>
            <Grid container spacing={2}>
              {serviziList.map((servizio, index) => {
                return (
                  <Grid item key={index + 1}>
                    <Servizio
                      index={index + 1}
                      icon={<HomeIcon className={classes.icon} />}
                      typography={servizio.title}
                    />
                  </Grid>
                );
              })}
              {/* <Grid xs={12} item>
                <Servizio
                  number="1"
                  icon={<HomeIcon className={classes.icon} />}
                  typography={"Visite Domiciliari"}
                />
              </Grid>
              <Grid xs={12} item>
                <Servizio
                  number="2"
                  icon={<HomeIcon className={classes.icon} />}
                  typography={"Consulenze telefoniche"}
                />
              </Grid>

              <Grid xs={12} item>
                <Servizio
                  number="3"
                  icon={<ImportContactsIcon className={classes.icon} />}
                  typography={"Cartella Computerizzata"}
                />
              </Grid>
              <Grid xs={12} item>
                <Servizio
                  number="4"
                  icon={<ImportContactsIcon className={classes.icon} />}
                  typography={"Medicazioni"}
                />
              </Grid>

              <Grid xs={12} item>
                <Servizio
                  number="5"
                  icon={<LocalHospitalIcon className={classes.icon} />}
                  typography={"Visite Ambulatoriali"}
                />
              </Grid>

              <Grid xs={12} item>
                <Servizio
                  number="6"
                  icon={<NoteIcon className={classes.icon} />}
                  typography={"Certificati a pagamento e non"}
                />
              </Grid>

              <Grid xs={12} item>
                <Servizio
                  icon={
                    <CardMedia
                      className={classes.icon}
                      image={SyringeIcon}
                      alt="a syringe icon"
                    />
                  }
                  typography={"Vaccini"}
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ServiziOfferti;
