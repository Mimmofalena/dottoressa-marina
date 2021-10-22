import {React, useState} from 'react'
import {animateScroll} from 'react-scroll'
import { Box, makeStyles } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles( theme => ({
    arrowIcon: {
        height:'2rem',
        width:'2rem',
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.light,
        cursor:'pointer',
        position: 'fixed',
        bottom:'0',
        left:'85%',
        marginBottom:'2rem',
        zIndex:'100'
        
    }
}))

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = ()=> {
        if(!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }

    window.addEventListener('scroll', checkScrollTop)

    const classes = useStyles()

    return (
        <Box  onClick={()=>{animateScroll.scrollToTop()}}>
        {showScroll ?<ArrowUpwardIcon  className={classes.arrowIcon} /> : null}
        </Box>
    )
}

export default ScrollToTop
