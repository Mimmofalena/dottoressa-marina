import React from "react";
import useStyles from "../Utils/Styles";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion/dist/es/index";
import doctorPicture from "../../assets/Doctor.svg";

const SubHeadingSection = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container spacing={2} justifySelf="center">
        <Grid item md={6}>
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
          >
            {/* <img src={MarinaPic} alt="" /> */}
            <CardMedia
              alt="dottoressa sorridente parla al telefono"
              component="img"
              src={doctorPicture}
            ></CardMedia>
          </motion.div>
        </Grid>
        <Grid item md={6}>
          <CardContent>
            <Box mt={4} p={2}>
              <motion.div
                initial={{ opacity: 0, translateX: "100%" }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Typography variant="h4" textAlign="center" gutterBottom={true}>
                  Dott.ssa Marina Tricoli
                </Typography>
                <Typography variant="h5" textAlign="center" gutterBottom={true}>
                  Medico di medicina generale
                </Typography>
                <Typography gutterBottom={true}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  optio voluptas dignissimos, enim quae nulla quasi ea saepe.
                  Beatae aspernatur exercitationem a libero consequatur saepe
                  non totam atque facilis deserunt.
                </Typography>
              </motion.div>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SubHeadingSection;
