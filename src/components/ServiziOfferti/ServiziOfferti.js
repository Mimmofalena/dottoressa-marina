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

const ServiziOfferti = () => {
  const classes = useStyles();

  return (
    <Card square className={classes.card} id="servizi-offerti">
      <CardContent>
        <Container>
          <Grid
            container
            display="flex"
            direction="column"
            align="center"
            spacing={5}
          >
            <Box p={2} m={2}>
              <Grid item xs={12}>
                <Typography variant="h4" color="initial" align="center">
                  Servizi Offerti
                </Typography>
              </Grid>
            </Box>

            <Box p={2} mb={2}>
              <Grid container spacing={2}>
                <Servizio
                  icon={<HomeIcon />}
                  typography={"Visite Domiciliari"}
                />
                <Servizio
                  icon={<ImportContactsIcon />}
                  typography={"Cartella Computerizzata"}
                />
                <Servizio icon={<LocalHospitalIcon />} typography={"Visite"} />
                <Servizio icon={<NoteIcon />} typography={"Certificati"} />
                <Servizio
                  icon={
                    <CardMedia
                      image={SyringeIcon}
                      alt="a syringe icon"
                      style={{ height: "24px", width: "24px" }}
                    />
                  }
                  typography={"Vaccini"}
                />
              </Grid>
            </Box>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default ServiziOfferti;
