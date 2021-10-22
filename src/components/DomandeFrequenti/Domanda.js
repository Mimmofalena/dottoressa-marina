import React,{useState} from 'react'
import {Grid, Typography, IconButton, Container, Divider} from '@material-ui/core'
import ArrowForward from "@material-ui/icons/ArrowForward"

const Domanda = (props) => {
    const [displayMore, setDisplayMore] = useState(false)

    const clickHandler = ()=> {
        setDisplayMore(!displayMore)
    }

    return (
         
     
        <Grid onClick={clickHandler} item xs={12}
        container
        display="flex"
        justifyContent="flex-start"
        spacing={2}
        >
        <Grid item xs={12} spacing={2} container display='flex' alignItems='center' justifyContent='flex-start' >
        
        <Grid item xs={2}>
            <IconButton >
            <ArrowForward/>
            </IconButton>
        </Grid>

        <Grid item xs={10}>
            <Typography variant='h6'>{props.title}</Typography>
        </Grid>

        
        </Grid>


        <Grid item xs={12}>
            <Container>
            {displayMore && <Typography align='justify' variant='body2'>{props.answer} <Divider/></Typography>}
            </Container>
        </Grid>

      </Grid>
     
    )
}

export default Domanda
