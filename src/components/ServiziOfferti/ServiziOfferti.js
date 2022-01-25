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
    <Card
      sx={{ marginX: 2 }}
      style={{ backgroundColor: theme.palette.primary[400] }}
      className={classes.card}
      id="servizi-offerti"
    >
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4} item>
          <Box p={2}>
            <Typography
              variant="h4"
              color="initial"
              align="center"
              gutterBottom
            >
              Servizi Offerti
            </Typography>
            <Typography textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nostrum autem porro quos cumque voluptas optio beatae
              exercitationem obcaecati deleniti culpa laudantium quis provident,
              dolores excepturi laboriosam magni error consequuntur!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <CardContent sx={{ padding: 2 }}>
            <Grid
              container
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Grid xs={12} md={6} item>
                <Servizio
                  icon={<HomeIcon className={classes.icon} />}
                  typography={"Visite Domiciliari"}
                />
              </Grid>
              <Grid xs={12} md={6} item>
                <Servizio
                  icon={<ImportContactsIcon className={classes.icon} />}
                  typography={"Cartella Elettronica"}
                />
              </Grid>
              <Grid xs={12} md={6} item>
                <Servizio
                  icon={<LocalHospitalIcon className={classes.icon} />}
                  typography={"Consulenze"}
                />
              </Grid>
              <Grid xs={12} md={6} item>
                <Servizio
                  icon={<NoteIcon className={classes.icon} />}
                  typography={"Certificati"}
                />
              </Grid>
              <Grid xs={12} md={6} item>
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
              <Grid xs={12} md={6} item>
                <Servizio
                  icon={
                    <CardMedia
                      className={classes.icon}
                      image={SyringeIcon}
                      alt="a syringe icon"
                    />
                  }
                  typography={"Agopuntura"}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>

    /////////////////////////
    //  <Card
    //       style={{ backgroundColor: theme.palette.primary[400] }}
    //       className={classes.card}
    //       id="servizi-offerti"
    //     >
    //       <CardContent sx={{ padding: "2rem" }}>
    //         <Container>
    //         <Grid
    //           container
    //           display="flex"
    //           direction="column"
    //           align="center"
    //           spacing={5}
    //         >
    //           <Box p={2} m={2}>
    //           <Grid item xs={12}>
    //             <Typography
    //               variant="h4"
    //               color="initial"
    //               align="center"
    //               gutterBottom
    //             >
    //               Servizi Offerti
    //             </Typography>
    //           </Grid>
    //           </Box>

    //           <Box p={2} mb={2}>
    //           <Grid container spacing={0}>
    //             <Grid xs={12} item>
    //               <Servizio
    //                 icon={<HomeIcon className={classes.icon} />}
    //                 typography={"Visite Domiciliari"}
    //               />
    //             </Grid>
    //             <Grid xs={12} item>
    //               <Servizio
    //                 icon={<ImportContactsIcon className={classes.icon} />}
    //                 typography={"Cartella Computerizzata"}
    //               />
    //             </Grid>
    //             <Servizio
    //                 icon={<ImportContactsIcon />}
    //                 typography={"Cartella Computerizzata"}
    //               />
    //               <Servizio icon={<LocalHospitalIcon />} typography={"Visite"} />
    //               <Servizio icon={<NoteIcon />} typography={"Certificati"} />
    //               <Servizio
    //                 icon={
    //                   <CardMedia
    //                     image={SyringeIcon}
    //                     alt="a syringe icon"
    //                     style={{ height: "24px", width: "24px" }}
    //                   />
    //                 }
    //                 typography={"Vaccini"}
    //               />
    //           </Grid>
    //           </Box>
    //         </Grid>
    //         </Container>
    //       </CardContent>
    //     </Card>
  );
};

export default ServiziOfferti;
