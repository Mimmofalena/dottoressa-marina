import React, { useState } from 'react'
import { Grid, Typography, IconButton } from '@mui/material'
import ArrowDropDown from "@mui/icons-material/ArrowDropDown"
import ServiziOffertiDetail from './ServiziOffertiDetail'

const Servizio = (props) => {

    const [displayMore, setDisplayMore] = useState(false)
   

const clickHandler = ()=> {
    setDisplayMore(!displayMore)
}

    return (
        <Grid onClick={clickHandler} style={{cursor: 'pointer'}} item xs={12}
        container
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        spacing={2}
        >
            <Grid  container item xs={6}  alignItems='center' justifyContent='flex-start' spacing={2} >
            
        <Grid  item xs={3} >
            {props.icon}
        </Grid>
         
        <Grid item xs={3} >
            <Typography variant={'h6'}>{props.typography}</Typography>
        </Grid>
            </Grid>

        <Grid  container item  xs={6}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>

            <IconButton size="large">
            <ArrowDropDown/>
            </IconButton>

        </Grid>
        </Grid>

        <Grid item xs={12}>
            {displayMore && <ServiziOffertiDetail/>}
       
        </Grid>

      </Grid>
    );
}

export default Servizio
