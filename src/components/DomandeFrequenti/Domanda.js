import React,{useState} from 'react'
import {Grid, Typography, IconButton, Container, Divider} from '@mui/material'
import ArrowForward from "@mui/icons-material/ArrowForward"

const Domanda = (props) => {
    const [displayMore, setDisplayMore] = useState(false)

    const clickHandler = (e)=> {
        setDisplayMore(!displayMore)
    }

    return (
        <Grid onClick={clickHandler} style={{cursor: 'pointer'}} item xs={12}
        container
        display="flex"
        justifyContent="flex-start"
        spacing={2}
        >
        <Grid item xs={12} container display='flex' alignItems='center' justifyContent='flex-start' >
        
        <Grid item xs={1}>
            <IconButton size="large">
            <ArrowForward/>
            </IconButton>
        </Grid>

        <Grid item xs={11}>
            <Typography variant='h6'>{props.title}</Typography>
        </Grid>

        
        </Grid>


        <Grid item xs={12}>
            <Container>
            {displayMore && <Typography align='justify' variant='body2'>{props.answer} <Divider/></Typography>}
            </Container>
        </Grid>

      </Grid>
    );
}

export default Domanda
