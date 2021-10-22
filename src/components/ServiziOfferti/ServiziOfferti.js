import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import NoteIcon from "@material-ui/icons/Note";
import {useTheme,Grid ,Typography,  Card, CardContent, Box, CardMedia} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SyringeIcon from "../../assets/syringe-icon.svg";
import React from "react";
import Servizio from "./Servizio";
import { motion } from "framer-motion";
import useStyles from "../Utils/Styles";



const ServiziOfferti = () => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    

    <Card className={classes.card} id='servizi-offerti' >
      <CardContent>

    <Grid  container display='flex' direction='column' align='center' spacing={5}>

<Box p={2} mb={2} >

      <Grid item xs={12} >
        <Typography variant="h4" color="initial" align="center">
          Servizi Offerti
        </Typography>
      </Grid >
</Box>


<Box p={2} mb={2}>

<Grid container spacing={2}>

<Servizio icon={<HomeIcon/>} typography={'Visite Domiciliari'}/>
<Servizio icon={<ImportContactsIcon />} typography={'Cartella Computerizzata'}/>
<Servizio icon={<LocalHospitalIcon />} typography={'Visite'}/>
<Servizio icon={<NoteIcon />} typography={'Certificati'}/>
<Servizio icon={ <CardMedia image={SyringeIcon} alt="a syringe icon" style={{ height: "24px", width: "24px" }} />} typography={'Vaccini'}/>
        
      </Grid>
      </Box>
      
      </Grid>

     
     
      </CardContent>
    </Card>
    
  );
};

export default ServiziOfferti;
