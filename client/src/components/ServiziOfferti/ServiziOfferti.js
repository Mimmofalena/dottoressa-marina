import { Grid, Typography, Card, CardContent } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

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
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ServiziOfferti;
