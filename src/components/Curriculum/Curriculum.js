import React from 'react'
import { Typography, Box, CardContent, Card, Container} from "@material-ui/core";
import useStyles from '../Utils/Styles';


const Curriculum = () => {
  
   

    const classes = useStyles()
    return (
      
       

            <Card className={classes.card} id='curriculum' variant='outlined'>
        <CardContent>
            <Container>

                <Box p={2}>
            <Typography gutterBottom variant='h4' align='center'>Il mio curriculum</Typography>
                </Box>
                <Box p={2}>
            <Typography align='justify' variant='subtitle1' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum ab quod cum similique aspernatur odit debitis non laudantium. Tenetur fuga facere expedita autem asperiores doloribus commodi, iure sapiente cum.</Typography>

                </Box>
            </Container>
        </CardContent>
            </Card>
       
       
    )
}

export default Curriculum
