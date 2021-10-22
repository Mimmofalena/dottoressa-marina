import React from 'react'
import { CardMedia, Container, makeStyles } from '@material-ui/core'

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
