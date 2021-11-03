import React from 'react'
import { useTheme,Typography, Box, CardContent, Card, Container} from "@mui/material";
import Domanda from './Domanda';
import DOMANDE from './Domande';
import useStyles from '../Utils/Styles';

const DomandeFrequenti = () => {
   
    const theme = useTheme()
    const classes= useStyles()
    return (
        
            <Card className={classes.card} id='domande-frequenti'  style={{backgroundColor:theme.palette.primary[400],}}>
              
        <CardContent>

        <Container>
                    <Box p={2}>
                    <Typography align='center' variant='h4'>
           Domande Frequenti
           </Typography>

        <Box p={2}>

           <Typography align='justify' variant='subtitle1'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi debitis maxime! Minima praesentium itaque eligendi aliquam, hic dolorem officiis tempora delectus harum? Reprehenderit illo iure tempore sunt voluptates soluta?
           </Typography>
        </Box>

        {DOMANDE.map((dom)=> {
            
           return <Domanda key={dom.title} title={dom.title} answer={dom.answer}/>
        })}
             </Box>
                </Container>
           
        </CardContent>
            </Card>
         
       
    )
}

export default DomandeFrequenti
