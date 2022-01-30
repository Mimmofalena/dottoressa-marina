import React from "react";
import { useTheme, Typography, CardContent, Card } from "@mui/material";
import Domanda from "./Domanda";
import DOMANDE from "./Domande";
import useStyles from "../Utils/Styles";

const DomandeFrequenti = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Card
      square
      className={classes.card}
      id="domande-frequenti"
      style={{ backgroundColor: theme.palette.primary[400] }}
    >
      <CardContent>
        <Typography align="center" variant="h4">
          Domande Frequenti
        </Typography>

        <Typography p={2} align="justify" variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sequi debitis maxime! Minima praesentium itaque eligendi aliquam, hic
          dolorem officiis tempora delectus harum? Reprehenderit illo iure
          tempore sunt voluptates soluta?
        </Typography>

        {DOMANDE.map((dom) => {
          return (
            <Domanda key={dom.title} title={dom.title} answer={dom.answer} />
          );
        })}
      </CardContent>
    </Card>
  );
};

export default DomandeFrequenti;
