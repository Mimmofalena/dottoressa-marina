import React from "react";
import {
  useTheme,
  Typography,
  CardContent,
  Card,
  Box,
  Link,
} from "@mui/material";
import Domanda from "./Domanda";
import DOMANDE from "./Domande";
import useStyles from "../Utils/Styles";
import { borderTop } from "@mui/system";

const DomandeFrequenti = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Card square className={classes.card} id="domande-frequenti">
      <CardContent style={{ backgroundColor: theme.palette.tertiary }}>
        <Box p={1}>
          <Typography align="center" variant="h4">
            Domande Frequenti
          </Typography>

          <Typography p={2} align="justify">
            Qui di seguito vi sono riportate le domande più frequenti. Se pensi
            vi sia altro da aggiungere non esitare a farmelo sapere, critiche
            costruttive sono sempre ben accette. Basta inviare una mail
            <Link href="mailto:tricolidoc@gmail.com">tricolidoc@gmail.com</Link>
          </Typography>

          {DOMANDE.map((dom) => {
            return (
              <Domanda
                key={dom.title}
                title={dom.title}
                answer={dom.answer}
                src={dom.src}
                alt={dom.alt}
              />
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DomandeFrequenti;
