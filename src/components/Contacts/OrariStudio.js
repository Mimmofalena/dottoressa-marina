import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  TableBody,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { v4 as uuidv4 } from "uuid";

const orari = [
  { day: "Lunedì", pomeriggio: "15:15 - 17:15" },
  { day: "Martedì", mattina: "09:30 - 11:30" },
  { day: "Mercoledì", pomeriggio: "15:15 - 17:15" },
  { day: "Giovedì", pomeriggio: "15:15 - 17:15" },
  { day: "Venerdì", mattina: "11:00 - 13:00" },
];

const OrariStudio = () => {
  const theme = useTheme();
  return (
    <Box mb={4}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: theme.palette.primary[100],
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              <TableCell
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                }}
                align="left"
              >
                Giorni
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Mattino
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Pomeriggio
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orari.map((item) => {
              return (
                <TableRow key={uuidv4()}>
                  <TableCell>{item.day}</TableCell>
                  <TableCell align="center">{item.mattina}</TableCell>
                  <TableCell align="center">{item.pomeriggio}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography p={1} mt={1}>
        Lo studio è aperto negli orari su indicati e solo su &nbsp;
        <strong>appuntamento</strong>. Variazioni Vi verranno comunicate tramite
        broadcast whatsapp.
      </Typography>
    </Box>
  );
};

export default OrariStudio;
