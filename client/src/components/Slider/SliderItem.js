import React from 'react'
import { CardMedia, Container } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    root:{
       maxHeight:'400px'
    },
    
})

const SliderItem = (props) => {
    const classes = useStyles()
    return (
        <>
        <Container size='sm'>
            <CardMedia className={classes.root}  component='img' src={props.src}></CardMedia>
        </Container> </>
    )
}

export default SliderItem
