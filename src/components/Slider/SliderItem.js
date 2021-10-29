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
       
            <CardMedia  component='img' src={props.src}></CardMedia>
        
    )
}

export default SliderItem
