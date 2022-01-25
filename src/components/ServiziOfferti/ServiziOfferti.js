import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import NoteIcon from "@mui/icons-material/Note";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  CardMedia,
  Container,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SyringeIcon from "../../assets/syringe-icon.svg";
import React from "react";
import Servizio from "./Servizio";
import useStyles from "../Utils/Styles";
import { useTheme } from "@mui/styles";

const ServiziOfferti = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    /////////////////////////
    <Card
      style={{ backgroundColor: theme.palette.primary[400] }}
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              magnam quis, aut quaerat exercitationem quasi natus. Ipsam beatae
              dignissimos culpa a reiciendis vero eius dolore, excepturi qui,
              hic in doloremque?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugit consectetur vitae nostrum repudiandae
              error aut nisi dolores labore ea, natus possimus in sed ullam
              animi unde voluptatem omnis ratione libero?
            </Typography>
          </Grid>

          <Grid p={2} item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <Servizio
                  icon={<HomeIcon className={classes.icon} />}
                  typography={"Visite Domiciliari"}
                />
              </Grid>
              <Grid xs={12} item>
                <Servizio
                  icon={<ImportContactsIcon className={classes.icon} />}
                  typography={"Cartella Computerizzata"}
                />
              </Grid>
              <Grid xs={12} item>
                <Servizio
                  icon={<ImportContactsIcon className={classes.icon} />}
                  typography={"Cartella Computerizzata"}
                />
              </Grid>
              <Grid xs={12} item>
                <Servizio
                  icon={<LocalHospitalIcon className={classes.icon} />}
                  typography={"Visite"}
                />
              </Grid>
              <Grid xs={12} item>
                <Servizio
                  icon={<NoteIcon className={classes.icon} />}
                  typography={"Certificati"}
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ServiziOfferti;
